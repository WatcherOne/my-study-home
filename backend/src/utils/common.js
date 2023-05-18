/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-18 14:09:11
 * Description: 封装的常用方法
*************************************************************/

export const getRequestToken = (req) => {
    const token = req.headers['authorization']
    return token ? token.split('Bearer ')[1] : null
}
