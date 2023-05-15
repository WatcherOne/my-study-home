/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-15 15:12:26
 * Description: 后端返回基础数据结构
*************************************************************/
import ApiResult from './ApiResult.js'

class R {
    constructor() {
        ApiResult.success()
    }
}

R.ok = (data) => {
    return ApiResult.success(data)
}

R.error = (data) => {
    return ApiResult.error(data)
}

export default R
