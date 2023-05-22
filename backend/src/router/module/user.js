import express from 'express'
import { Login } from '../../admin/service/Login.js'
import { Register } from '../../admin/service/Register.js'
import { getUserInfo } from '../../admin/service/user.js'

const router = express.Router()

router.use('/register', Register)
router.use('/login', Login)
router.use('/getUserInfo', getUserInfo)

export default router
