/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-15 14:42:00
 * Description: 业务层：注册逻辑
*************************************************************/
import { User } from '../entity/User.js'
import { encry } from '../../utils/hash.js'

export const Register = async (req, res) => {
    const { acount, password } = req.body
    try {
        const userInfo = await User.findOne({ where: { acount } })
        if (userInfo) {
            return res.json(R.error(req, 'ACOUNT_IS_EXIST'))
        }
    } catch {
        return res.json(R.error(req, 'REQUEST_FAILED'))
    }
    const password_hash = encry(password)
    try {
        await User.create({ acount, password: password_hash })
        // Todo 注册人数+1
        return res.json(R.ok(req, 'REGISTER_SUCCESS'))
    } catch (e) {
        return res.json(R.error(req, e.errors[0].message || 'REGISTER_FAILED'))
    }
}
