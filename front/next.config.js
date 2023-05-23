/** @type {import('next').NextConfig} */

module.exports = {
    // 环境变量
    // you can use 'process.env.appName'
    env: {
        appName: '书籍屋'
    },
    // next默认静态生成超时为60s
    // 如果超过时间没有新页面生成, 它会尝试生成三次, 如果第四次失败则构建失败
    staticPageGenerationTimeout: 90
}
