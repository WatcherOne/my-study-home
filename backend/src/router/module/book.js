import express from 'express'
import { getBookList, getBookDetail } from '../../admin/service/Book.js'

const router = express.Router()

router.get('/list', getBookList)
router.get('/detail/:id', getBookDetail)

export default router
