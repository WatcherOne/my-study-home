/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-15 14:42:00
 * Description: 业务层：注册逻辑
*************************************************************/
import User from '../entity/User.js'
import { getValidateErrorList } from '../../utils/common.js'
import { encry } from '../../utils/hash.js'

export const Register = async (req, res) => {
    try {
        const userModel = req.body
        const { password } = userModel
        const password_hash = encry(password)
        userModel.password = password_hash
        await User.create(userModel)
        // Todo 注册人数+1
        return res.json(R.ok(req, 'REGISTER_SUCCESS'))
    } catch (e) {
        return res.json(R.error(req, getValidateErrorList(e) || 'REGISTER_FAILED'))
    }
}
