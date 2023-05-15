/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-15 16:45:53
 * Description: 密码加密
*************************************************************/
import crypto from 'crypto-js'
import { PASSWORD_SECRET } from '../config.js'

// 加密密码
export const encry = (target) => {
    return target && crypto.AES.encrypt(target, PASSWORD_SECRET).toString()
}

// 解密密码
export const decry = (hash) => {
    return hash && crypto.AES.decrypt(hash, PASSWORD_SECRET).toString(crypto.enc.Utf8)
}
