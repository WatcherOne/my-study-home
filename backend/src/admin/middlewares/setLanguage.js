/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-18 14:34:34
 * Description: 设置与用户挂钩的系统语言（如果有些接口无需登录则由前端控制语言）
*************************************************************/
import tokenService from '../../redis/token.js'

export const setLanguage = async (req, res, next) => {
    const { token } = req
    const userInfo = token ? await tokenService.getLoginUser(token) : {}
    const { language = 0 } = userInfo
    req.language = language
    await next()
}
