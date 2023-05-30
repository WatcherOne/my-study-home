/** @type {import('next').NextConfig} */

/**
 * next.config.js是一个 Node.js 模块
 * 不是一个 JSON 文件
 * 可以用于 Next 启动服务已经构建阶段，但是不作用于浏览器端
 */
const nextConfig = {
    reactStrictMode: true,
    // 环境变量
    // you can use 'process.env.appName'
    env: {
        appName: '书籍屋'
    },
    // next默认静态生成超时为60s
    // 如果超过时间没有新页面生成, 它会尝试生成三次, 如果第四次失败则构建失败
    staticPageGenerationTimeout: 90,
    // useFileSystemPublicRoutes: 禁止服务端文件路由
    // useFileSystemPublicRoutes: false
}

module.exports = nextConfig
