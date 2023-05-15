/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-15 14:42:00
 * Description: 业务层：注册逻辑
*************************************************************/
import R from '../domain/R.js'
import { User } from '../entity/User.js'
import { encry } from '../../utils/hash.js'

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
    const password_hash = encry(password)
    try {
        await User.create({ acount, password: password_hash })
        // Todo 注册人数+1
        return res.json(R.ok())
    } catch (e) {
        return res.json(R.error(e.errors[0].message || '注册失败'))
    }
}
