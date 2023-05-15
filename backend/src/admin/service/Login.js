/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-15 16:16:41
 * Description: 业务层：登录逻辑
*************************************************************/
import R from '../domain/R.js'
import { User } from '../entity/User.js'
import { generateToken } from '../../utils/token.js'

export const Login = async (req, res) => {
    try {
        const { acount, password } = req.body
        const userInfo = await User.findOne({ where: { acount } })
        if (userInfo) {
            // 加密密码验证是否正确
            // Todo: 记录登录人员+1
            // 设置 token, 并返回
            const token = await generateToken({ acount }, '24h')
            // Todo: redis 设置token
            // RedisClient.SETEX(`${acount}:token`, 60 * 60 * 24, token) // 设置有效时间为24小时
            return res.json(R.ok(token))
        } else {
            return res.json(R.error('用户不存在'))
        }
    } catch {
        return res.json(R.error('登录失败'))
    }
}
