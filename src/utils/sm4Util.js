const SM4 = require('gm-crypt').sm4;
const secretKey = process.env.VUE_APP_SECRET_KEY; // 密钥 前后端一致即可,后端提供
const secretIv = process.env.VUE_APP_SECRET_IV; // 密钥 前后端一致即可,后端提供
let sm4Config = {
    key: secretKey, // key值要与后端的一致，后端解密是根据这个key
    mode: 'cbc', // 加密的方式有两种，ecb和cbc两种，也是看后端如何定义的，cbc的话下面还要加一个iv的参数，ecb不用
    iv: secretIv, // iv是cbc模式的第二个参数，也需要跟后端配置的一致 iv是initialization vector的意思，就是加密的初始化矢量，初始化加密函数的变量，也叫初始向量
    cipherType: 'base64',
};

/*
 * 加密工具函数
 * @param {String} text 待加密文本
 * @param key string 加密key(16位)
 * @param iv string 偏移向量(16位)
 */
export function SM4Encrypt(text, key = secretKey, iv = secretIv) {
    sm4Config.key = key;
    sm4Config.iv = iv;
    const sm4Util = new SM4(sm4Config); // new一个sm4函数，将sm4Config作为参数传递进去
    return sm4Util.encrypt(text, key);
}

/*
 * 解密工具函数
 * @param {String} text 待解密密文
 * @param key string 加密key(16位)
 * @param iv string 偏移向量(16位)
 */
export function SM4Decrypt(text, key = secretKey, iv = secretIv) {
    hexToString(iv)
    sm4Config.key = key;
    sm4Config.iv = iv;
    const sm4Util = new SM4(sm4Config); // new一个sm4函数，将sm4Config作为参数传递进去
    return sm4Util.decrypt(text, key);
}

/**
 * 16 进制串转字节数组
 */
export function hexToArray(str) {
    const arr = []
    for (let i = 0, len = str.length; i < len; i += 2) {
        arr.push(parseInt(str.substr(i, 2), 16))
    }
    return arr
}
/**
 * 16 进制串转字节数组
 */
export function hexToString(str) {
    str = str.toUpperCase()
    let strs = '';
    for (let i = 0, len = str.length; i < len; i += 2) {
        // arr.push(parseInt(str.substr(i, 2), 16))
        strs += str.substr(i, 2)
    }
    return strs
}
