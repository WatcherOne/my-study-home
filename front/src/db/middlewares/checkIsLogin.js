/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-11 17:33:20
 * Description: checkIsLogin
*************************************************************/
import { getRequestToken } from '../../utils/common.js'
import { analysisToken } from '../../utils/token.js'
import { WHITE_LIST } from '../../router/whitelist.js'

export const checkIsLogin = async (req, res, next) => {
    const { baseUrl } = req
    // 白名单过滤验证登录
    if (WHITE_LIST.includes(baseUrl)) {
        return next()
    }
    // 获取前端请求头中的 Token 有效验证
    const token = getRequestToken(req)
    if (!token) {
        return res.json(R.error(req, { code: HTTP_CODE.UNAUTHORIZED, msg: 'NOT_LOGIN' }))
    }
    try {
        // 验证 token 即在 login 时保存在 redis 中去拿（token存在redis中）
        // 先验证 redis 中存入的 token 是否相同？
        await analysisToken(token)
        req.token = token
        next()
    } catch (e) {
        return res.json(R.error(req, { code: HTTP_CODE.UNAUTHORIZED, msg: e.message || 'UNKNOWN_ERROR' }))
    }
}
