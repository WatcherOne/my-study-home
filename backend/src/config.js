export const DATABASE = {
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '12345678',
    database: 'book_house'
}

export const REDIS = {
    host: 'localhost',
    port: 6379
}

// 设置密码加密密钥
export const PASSWORD_SECRET = 'bookhousepasswordsecret'
// 设置token加密解密的密钥
export const jwtSecretKey = 'c^_^h'
// 设置token加密密钥：有效期（默认24H）
export const EXPIRESIN = '24h'
// 设置Redis中 Token 键
export const REDIS_TOKEN_KEY = 'token'
// 设置Redis中 Token存储有效期（默认24H）
export const REDIS_EXPIRESIN = 60 * 60 * 24
