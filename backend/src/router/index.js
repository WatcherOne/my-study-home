/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-11 16:39:52
 * Description: API路由配置
*************************************************************/
import express from 'express'
import UserRouter from './module/user.js'
import DictRouter from './module/dict.js'
import BookRouter from './module/book.js'

const router = express.Router()

router.use('/user', UserRouter)
router.use('/dict', DictRouter)
router.use('/book', BookRouter)

export default router
