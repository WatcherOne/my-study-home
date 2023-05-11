/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-11 16:39:52
 * Description: API路由配置
*************************************************************/
import express from 'express'

const router = express.Router()

router.use('/login', async (req, res) => {
    res.send('login')
})
router.use('/register', async (req, res) => {
    return res.json('2323232')
})

export default router
