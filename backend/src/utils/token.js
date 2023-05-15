/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-11 17:23:34
 * Description: token加密与解密
*************************************************************/
import { jwtSecretKey, EXPIRESIN } from '../config.js'
import jwt from 'jsonwebtoken'
import { promisify } from 'util'

// 通过 promisify 方法将 回调函数转换成支持 promise 的形式
export const sign = promisify(jwt.sign)
export const verify = promisify(jwt.verify)

// 加密信息并返回 Token
export const generateToken = async (info, expiresIn = EXPIRESIN) => {
    return await sign(info, jwtSecretKey, { expiresIn })
}

// 验证 Token
export const verifyToken = async (token) => {
    return await verify(token, jwtSecretKey)
}
