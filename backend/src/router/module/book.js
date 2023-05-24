import express from 'express'
import { getBookPage, getBookDetail, getMyBookList } from '../../admin/service/Book.js'

const router = express.Router()

router.get('/page', getBookPage)
router.get('/detail/:id', getBookDetail)
router.get('/myBookList', getMyBookList)

export default router
