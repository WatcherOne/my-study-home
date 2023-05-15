// Todo：第一个变量来控制是哪种语言

export const Tips = (key) => {
    // 根据语言去拿
    return CH[key] || EN[key] || ''
}

export const CH = {
    LOGIN_SUCCESS: '登陆成功!',
    LOGIN_FAILED: '登录失败！',
    USERNAME_IS_EMPTY: '账户不可为空',
    ACOUNT_NOT_EXIST: '登录账户不存在',
    PASSWORD_IS_EMPTY: '密码不可为空',
    PASSWORD_IS_ERROR: '密码错误'
}

export const EN = {
    LOGIN_SUCCESS: 'login success!',
    LOGIN_FAILED: 'login failed!',
    USERNAME_IS_EMPTY: 'acount cannot be null',
    ACOUNT_NOT_EXIST: 'acount is not exist',
    PASSWORD_IS_EMPTY: 'password cannot be null',
    PASSWORD_IS_ERROR: 'password is wrong'
}

export const CODE = {
    SUCCESS: 200,
    INVALID_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    METHOD_ERROR: 405,
    TOO_BODY_LENGTH: 413,
    TOO_URL_LENGTH: 414,
    ERROR: 500
}
