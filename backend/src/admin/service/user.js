/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-22 16:36:18
 * Description: 用户相关的业务逻辑
*************************************************************/
import User from '../entity/User.js'
import tokenService from '../../redis/token.js'
import { getValidateErrorList } from '../../utils/common.js'

export const getUserInfo = async (req, res) => {
    try {
        const { token } = req
        if (!token) {
            return res.json(R.error(req, { code: HTTP_CODE.UNAUTHORIZED, msg: 'jwt expired' }))
        }
        const userModel = await tokenService.getLoginUser(token)
        const { id } = userModel
        // 从数据库拿取最新用户信息
        const userInfo = await User.findOne({ where: { id } })
        if (!userInfo) {
            return res.json(R.error(req, 'ACOUNT_NOT_EXIST'))
        }
        return res.json(R.ok(req, { data: userInfo }))
    } catch (e) {
        return res.json(R.error(req, getValidateErrorList(e)))
    }
}
