/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-15 15:05:00
 * Description: redis
*************************************************************/
import redis from 'redis'
import { REDIS } from '../config.js'

// 创建连接 (默认连接：localhost:6379)
const RedisClient = redis.createClient()

RedisClient.connect(REDIS.port, REDIS.host)

export default RedisClient
