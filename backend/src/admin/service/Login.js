/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-15 16:16:41
 * Description: 业务层：登录逻辑
*************************************************************/
import { User } from '../entity/User.js'
import { decry } from '../../utils/hash.js'
import { generateToken } from '../../utils/token.js'
import tokenService from '../../redis/token.js'

export const Login = async (req, res) => {
    try {
        const { acount, password } = req.body
        const userInfo = await User.findOne({ where: { acount } })
        if (userInfo) {
            // 解析用户密码明文对比
            if (decry(userInfo.password) === password) {
                // 生成 Token
                const token = await generateToken({ acount }, '24h')
                // 存入 Token和用户信息 到 redis
                tokenService.saveToken(token, userInfo)
                // Todo: 记录登录人员+1
                return res.json(R.ok(req, { data: { token, userInfo }, msg: 'LOGIN_SUCCESS' }))
            } else {
                return res.json(R.error(req, 'PASSWORD_IS_ERROR'))
            }
        } else {
            return res.json(R.error(req, 'ACOUNT_NOT_EXIST'))
        }
    } catch {
        return res.json(R.error(req, 'LOGIN_SUCCESS'))
    }
}

export const getUserInfo = async (req, res) => {

}
