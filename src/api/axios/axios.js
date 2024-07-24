
/**
 * axios封装
 * 请求拦截、响应拦截、
 */
import axios from 'axios';
import { PcCookie, Key } from '../../utils/cookie'
import { SM4Encrypt, SM4Decrypt } from '@/utils/sm4Util'
// 是否开启加密传输
const isEncrypt = process.env.VUE_APP_IS_ENCRYPT;
// 加解密字符串前缀
const encryptDecryptPrefix = process.env.VUE_APP_ENCRYPT_DECRYPT_PREFIX;

// 创建axios实例
const Axios = axios.create({ timeout: 1000 * 20 });
Axios.defaults.baseURL = process.env.VUE_APP_BASE_API;

/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */
Axios.interceptors.request.use(
    config => {
        // 获取token
        config.headers['Authorization'] = 'Bearer ' + PcCookie.get(Key.accessTokenKey);
        // 传参加密
        if (isEncrypt == 'true') {
            if (config.data && config.headers['Content-Type'] === 'application/json;charset=UTF-8') {
                config.data = encryptDecryptPrefix + SM4Encrypt(JSON.stringify(config.data));
                config.headers.encrypt = true
            }
        }
        return config;
    },
    error => Promise.error(error)
)

/** 
 * 响应拦截器 （每次请求后）
 */
Axios.interceptors.response.use(
    res => {
        if (res.status === 200) {
            // 解密
            if (res.headers.encrypt == 'true') {
                const data = res.data.data || '';
                if (data.includes(encryptDecryptPrefix)) {
                    res.data.data = JSON.parse(SM4Decrypt(data.substring(encryptDecryptPrefix.length)));
                } else {
                    res.data.data = JSON.parse(SM4Decrypt(data));
                }
            }
            return Promise.resolve(res.data);
        } else {
            return Promise.reject(res.data);
        }
    },
    error => {
        const { response } = error;
        if (response) {
            return Promise.reject(response);
        } else {
            alert("请求超时或断网");
        }
    }
);

export default Axios;