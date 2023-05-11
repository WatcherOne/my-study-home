/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-11 16:58:06
 * Description: 基础返回数据结构
*************************************************************/
class ApiResult {
    constructor(data) {
        this.status = 200
        this.data = data
        this.msg = '请求成功'
    }

    setStatus(status) {
        this.status = status
        return this
    }

    setData(data) {
        this.data = data
        return this
    }

    setMsg(message) {
        this.msg = message
        return this
    }

    set401() {
        this.status = 401
        this.msg = 'token已过期'
        return this
    }

    set404() {
        this.status = 404
        this.msg = '无效请求'
        return this
    }

    set500(msg) {
        this.status = 500
        this.msg = msg
        return this
    }
}

ApiResult.error = (msg) => {
    return new ApiResult().setStatus(500).setMsg(msg)
}

ApiResult.success = (data, msg = '请求成功') => {
    const result = new ApiResult()
    data && result.setData(data)
    return result.setMsg(msg)
}

export default ApiResult
