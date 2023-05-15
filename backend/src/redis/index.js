/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-15 15:05:00
 * Description: redis
*************************************************************/
import redis from 'redis'

// 创建连接 (默认连接：localhost:6379)
const connect = redis.createClient(port, host)

// 设置过期时间
connect.expire('hello', 10)

export default connect
