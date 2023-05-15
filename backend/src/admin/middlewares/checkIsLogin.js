/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-11 17:33:20
 * Description: checkIsLogin
*************************************************************/
import { verifyToken } from '../../utils/token.js'
import { WHITE_LIST } from '../../router/whitelist.js'

export const checkIsLogin = async (req, res, next) => {
    const { baseUrl } = req
    // 白名单过滤验证登录
    if (WHITE_LIST.includes(baseUrl)) {
        return next()
    }
    // 取到前端请求头中的 Token 有效验证
    const token = req.headers['authorization']
    token = token ? token.split('Bearer ')[1] : null
    // 未携带 Token
    if (!token) {
        return res.json({ code: 401, msg: '未登录' })
    }
    try {
        // 验证 token 即在 login 时保存在 redis 中去拿（token存在redis中）
        // 先验证 redis 中存入的 token 是否相同？
        await verifyToken(token)
        next()
    } catch (e) {
        return res.json(e)
    }
}
