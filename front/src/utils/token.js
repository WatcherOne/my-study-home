/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-11 17:23:34
 * Description: token加密与解密
*************************************************************/
import { jwtSecretKey, EXPIRESIN } from '../config.js'
import jwt from 'jsonwebtoken'  // token加密插件
import { promisify } from 'util'

// 通过 promisify 方法将 回调函数转换成支持 promise 的形式
export const sign = promisify(jwt.sign)
export const verify = promisify(jwt.verify)

// 生成 Token
export const generateToken = async (info, expiresIn = EXPIRESIN) => {
    return await sign(info, jwtSecretKey, { expiresIn })
}

// 解析 Token
export const analysisToken = async (token) => {
    return await verify(token, jwtSecretKey)
}
