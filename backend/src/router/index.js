/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-11 16:39:52
 * Description: API路由配置
*************************************************************/
import express from 'express'
import { Login } from '../admin/service/Login.js'
import { Register } from '../admin/service/Register.js'
import { getDictType } from '../admin/service/Dict.js'

const router = express.Router()

router.use('/login', Login)
router.use('/register', Register)
router.use('/getDictType', getDictType)

export default router
