/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-11 16:29:55
 * Description: 入口路径
*************************************************************/
import { resolve } from 'path'
import express from 'express'
import logger from 'morgan'     // 输入日志中间件 // Todo：配置输出日志的友好性
import router from './router/index.js'
import { checkIsLogin } from './admin/middlewares/checkIsLogin.js'

const app = express()
const port = process.argv[2] || process.env.PORT || 8199
const __dirname = resolve()

// Todo：配置cookies【express-session】
app.use(express.json())
app.use(express.urlencoded({ extended: false }))        // 接收post请求数据
app.use(logger('short'))                                // 配置日志
app.use(express.static(resolve(__dirname, 'public')))   // 配置静态资源

// 全局拦截验证 Token 配置
app.use('*', checkIsLogin)
app.use('/api', router)
// Todo：定时任务执行处理【node-schedule】

app.listen(port, () => {
    console.log(`listening on: http://localhost:${port}`)
})
