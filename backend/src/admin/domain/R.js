/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-15 15:12:26
 * Description: 后端返回基础数据结构
*************************************************************/
class R {
    constructor(data) {
        this.code = 200
        this.data = data
        this.msg = '请求成功'
    }

    setCode(code) {
        this.code = code
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
}

R.ok = (data) => {
    return new R(data)
}

R.error = (data, msg = '请求失败') => {
    return new R(data).setCode(500).setMsg(msg)
}

export default R
