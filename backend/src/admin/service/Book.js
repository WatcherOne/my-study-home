/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-23 13:54:22
 * Description: book相关业务接口
*************************************************************/
import { handlePageParams, getValidateErrorList } from '../../utils/common.js'
import Book from '../entity/Book.js'

export const getBookList = async (req, res) => {
    try {
        const { keywords } = req.query
        const searchParams = keywords ? {
            [Op.or]: [
                { name: { [Op.like]: `%${keywords}%` } }
            ]
        } : {}
        const data = await Book.findAndCountAll(Object.assign({
            where: searchParams
        }, handlePageParams(req)))
        return res.json(R.ok(req, { data, msg: 'REQUEST_SUCCESS' }))
    } catch (e) {
        return res.json(R.error(req, getValidateErrorList(e)))
    }
}

export const getBookDetail = async (req, res) => {
    try {
        const { id } = req.params
        const data = await Book.findOne({
            where: { id }
        })
        return res.json(R.ok(req, { data, msg: 'REQUEST_SUCCESS' }))
    } catch (e) {
        return res.json(R.error(req, getValidateErrorList(e)))
    }
}
