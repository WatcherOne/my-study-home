/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-11 16:29:55
 * Description: 入口路径
*************************************************************/
import { resolve } from 'path'
import express from 'express'
// Todo - 路径替换别名 + 文件名后缀 + 默认文件名
// import { addAliases } from 'module-alias' // 引入模块别名插件
import logger from 'morgan'               // 输入日志中间件 // Todo：配置输出日志的友好性
import router from './router/index.js'
import R from './admin/domain/R.js'
import { HTTP_CODE } from './tip/index.js'
import { checkIsLogin } from './admin/middlewares/checkIsLogin.js'
import { setLanguage } from './admin/middlewares/setLanguage.js'

const app = express()
const port = process.argv[2] || process.env.PORT || 8199
const __dirname = resolve()

// 配置全局变量
global.R = R
global.HTTP_CODE = HTTP_CODE

// Todo：配置cookies【express-session】
app.use(express.json())
app.use(express.urlencoded({ extended: false }))        // 接收post请求数据
app.use(logger('short'))                                // 配置日志
app.use(express.static(resolve(__dirname, 'public')))   // 配置静态资源

app.use('*', checkIsLogin)  // 全局拦截验证 Token 配置
app.use('*', setLanguage)   // 添加中间件设置当前系统语言
app.use('/api', router)
// Todo：定时任务执行处理【node-schedule】
// Todo: 监听 router 里面的所有前置错误

app.listen(port, () => {
    console.log(`listening on: http://localhost:${port}`)
})
