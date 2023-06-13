/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-23 13:54:22
 * Description: book相关业务接口
*************************************************************/
// import { Sequelize } from 'sequelize'
import R from '@/db/domain/R.js'
import Book from '@/db/models/Book.js'
import BookGroup from '@/db/models/BookGroup.js'
import BookGroupBook from '@/db/models/BookGroupBook.js'
import Author from '@/db/models/Author.js'
// import tokenService from '../../redis/token.js'
import { handlePageParams, getValidateErrorList } from '@/utils/common.js'

export const getBookPage = async (req) => {
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
        return R.ok(req, { data, msg: 'REQUEST_SUCCESS' })
    } catch (e) {
        console.log(e)
        return R.error(req, getValidateErrorList(e))
    }
}

// export const getBookDetail = async (req, res) => {
//     try {
//         const { id } = req.params
//         const data = await Book.findOne({
//             where: { id }
//         })
//         return res.json(R.ok(req, { data, msg: 'REQUEST_SUCCESS' }))
//     } catch (e) {
//         return res.json(R.error(req, getValidateErrorList(e)))
//     }
// }

BookGroup.belongsToMany(Book, {
    as: 'list',
    foreignKey: 'listId',
    otherKey: 'bookId',
    through: {
        as: 'group_book',
        model: BookGroupBook
    }
})
Book.hasOne(Author, {
    sourceKey: 'authorId',
    as: 'author',
    foreignKey: 'id'
})

// 获得用户关联书单
export const getMyBookList = async (req, res) => {
    try {
        // const userModel = await tokenService.getLoginUser(req.token)
        // if (!userModel) {
        //     return res.json(R.error(req, { code: HTTP_CODE.UNAUTHORIZED, msg: 'jwt expired' }))
        // }
        // const { id: userId } = userModel
        const data = await BookGroup.findAll({
            where: { userId: '6' },
            include: [{
                model: Book,
                as: 'list',
                required: true,
                through: {
                    as: 'group_book',
                    attributes: []
                },
                include: {
                    model: Author,
                    as: 'author',
                    required: true
                }
            }]
        })
        return R.ok(req, { data, msg: 'REQUEST_SUCCESS' })
    } catch (e) {
        return R.error(req, getValidateErrorList(e))
    }
}
