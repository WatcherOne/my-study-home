import express from 'express'
import { Login } from '../../admin/service/Login.js'
import { Register } from '../../admin/service/Register.js'
import { getUserInfo } from '../../admin/service/user.js'

const router = express.Router()

router.post('/register', Register)
router.post('/login', Login)
router.get('/getUserInfo', getUserInfo)

export default router
