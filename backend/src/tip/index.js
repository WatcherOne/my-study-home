import CH from './ch.js'
import EN from './en.js'

export const Tips = (req, key) => {
    const { language = 0 } = req
    const tipObj = MACH[language] || {}
    return tipObj[key] || key || ''
}

const MACH = {
    0: CH,
    1: EN
}

export const HTTP_CODE = {
    SUCCESS: 200,
    INVALID_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    METHOD_ERROR: 405,
    TOO_BODY_LENGTH: 413,
    TOO_URL_LENGTH: 414,
    ERROR: 500
}
