// /** @type {import('next').NextConfig} */
const nextConfig = {
    // 环境变量 - you can use 'process.env.appName'
    env: {
        appName: '书籍屋'
    },
    reactStrictMode: true,
    // Next.js的默认静态生成超时为60秒
    // 如果在超时时间内没有新页面完成生成，它将尝试再生成三次。如果第四次尝试失败，则构建将失败
    staticPageGenerationTimeout: 90
}

module.exports = nextConfig
