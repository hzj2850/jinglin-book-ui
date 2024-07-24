// 引入
const sm2 = require('sm-crypto').sm2
const cipherMode = 1 // 1 - C1C3C2，0 - C1C2C3，默认为1

// 后端会生成密钥对
// publicKey：公钥 后端提供
// privateKey：私钥 后端提供
const publicKey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
const privateKey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"

// 加密
// value：需要加密的内容
export function encrypt (value) {
    // 给后端传值时需要在加密的密文前面加04 ,这样后端才能解密正确不报错
    return '04' + sm2.doEncrypt(value, publicKey, cipherMode)
}

// 解密
// value：需要解密的密文
export function decrypt (value) {
    // 后端传输过来的密文开头的两个字符通常也为04，因此解密时需要删除
    return sm2.doDecrypt(value.slice(2, value.length), privateKey, cipherMode)
}
