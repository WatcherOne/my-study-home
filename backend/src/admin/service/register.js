/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-15 14:42:00
 * Description: 业务层逻辑
*************************************************************/
import R from '../domain/R.js'
import { User } from '../entity/User.js'

export const Register = async (req, res) => {
    const { acount, password } = req.body
    try {
        const userInfo = await User.findOne({ where: { acount } })
        if (userInfo) {
            return res.json(R.error('用户已存在'))
        }
    } catch {
        return res.json(R.error('网络出错'))
    }
    // Todo 加密密码
    try {
        await User.create({ acount, password })
        // Todo 注册人数+1
        return res.json(R.ok())
    } catch {
        return res.json(R.error('注册失败'))
    }
}
