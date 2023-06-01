/** @type {import('next').NextConfig} */
const path = require('path')

/**
 * next.config.js是一个 Node.js 模块
 * 不是一个 JSON 文件
 * 可以用于 Next 启动服务已经构建阶段，但是不作用于浏览器端
 */
const nextConfig = {
    reactStrictMode: true,
    // 自定义一个构建目录, 来代替 .next 文件夹
    distDir: 'build',
    // 是否给每个路由生成Etag
    // Etag是用来做缓存验证的，如果路由执行的时候，新的Etag是相同的，那么就会复用当前内容，而无需重新渲染
    // 默认情况下，nextJS是会对每个路由生成Etag的。但是如果我们部署的时候，ngx已经做了Etag的配置，那么就可以关闭nextJS的Etag，节省性能
    generateEtags: false,
    // 在pages目录下那种后缀的文件会被认为是页面
    pageExtensions: ['jsx', 'js'],
    // 环境变量
    // you can use 'process.env.appName'
    env: {
        appName: '书籍屋'
    },
    // （重要配置）手动修改webpack config
    webpack: (config, options) => {
        return config
    },
    // （重要配置）修改webpackDevMiddleware配置
    // webpackDevMiddleware: config => {
    //     return config
    // },
    // next默认静态生成超时为60s
    // 如果超过时间没有新页面生成, 它会尝试生成三次, 如果第四次失败则构建失败
    staticPageGenerationTimeout: 90,
    // useFileSystemPublicRoutes: 禁止服务端文件路由
    // useFileSystemPublicRoutes: false
    // 禁用图像优化, 图像优化 API 需要服务器根据请求按需优化图像
    // 但不适用于 next export, 因为它不包含用于优化图像的服务器
    images: {
        unoptimized: true,
    },
    // exportPathMap: () => {
    //     // 生成静态文件的配置
    //     return {
    //         '/': { page: '/' }
    //     }
    // }
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    }
}

module.exports = nextConfig
