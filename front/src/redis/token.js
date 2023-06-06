/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-18 11:43:32
 * Description: redis 存储与验证 Token (包括用户信息)
*************************************************************/
import RedisClient from './index.js'
import { REDIS_TOKEN_KEY, REDIS_EXPIRESIN } from '../config.js'

const saveToken = (token, userInfo = {}) => {
    const key = `${REDIS_TOKEN_KEY}:${token}`
    RedisClient.expire(key, REDIS_EXPIRESIN)
    RedisClient.set(key, JSON.stringify(userInfo))
}

const getRedisToken = async (token) => {
    if (!token) {
        return null
    }
    try {
        const str = await RedisClient.get(`${REDIS_TOKEN_KEY}:${token}`)
        return str && JSON.parse(str)
    } catch {
        return null
    }
}

export default {
    saveToken,
    getLoginUser: getRedisToken
}
