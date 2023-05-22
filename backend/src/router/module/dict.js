import express from 'express'
import { getDictTypePage, createDictType, updateDictType, deleteDictType, getDictDataPage, getDictAll } from '../../admin/service/Dict.js'

const router = express.Router()

router.get('/getDictTypePage', getDictTypePage)
router.post('/createDictType', createDictType)
router.put('/updateDictType', updateDictType)
router.delete('/deleteDictType', deleteDictType)
router.get('/getDictDataPage', getDictDataPage)
router.get('/getDictAll', getDictAll)

export default router
