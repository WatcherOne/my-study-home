/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-15 15:12:26
 * Description: 后端返回基础数据结构
*************************************************************/
import { Tips } from '../../tip/index.js'

class R {
    constructor(code = 200, data = null) {
        this.code = code
        this.data = data
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

// 还需要修改一下：调整msg尽量不传由 前台 next 控制
R.ok = (req, options) => {
    if (!options) {
        return new R().setMsg(Tips(req, 'REQUEST_SUCCESS'))
    }
    if (typeof options === 'string') {
        return new R().setMsg(Tips(req, options))
    }
    const { code, data, msg } = options || {}
    return new R(code, data).setMsg(Tips(req, msg))
}

R.error = (req, options) => {
    if (!options) {
        return new R(500, null, Tips(req, 'REQUEST_FAILED'))
    }
    if (typeof options === 'string') {
        return new R(500).setMsg(Tips(req, options))
    }
    const { code, data, msg } = options || {}
    return new R(code, data).setMsg(Tips(req, msg))
}

export default R
