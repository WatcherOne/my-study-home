/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-15 14:42:00
 * Description: 业务层：字典数据
*************************************************************/
import { Op } from 'sequelize'
import { handlePageParams, getValidateErrorList } from '../../utils/common.js'
import { DictType, DictTypeData } from '../entity/Dict.js'

export const getDictTypePage = async (req, res) => {
    try {
        const { keywords } = req.query
        const searchParams = keywords ? {
            [Op.or]: [
                { dictCode: { [Op.like]: `%${keywords}%` } },
                { dictName: { [Op.like]: `%${keywords}%` } }
            ]
        } : {}
        const dictTypeList = await DictType.findAndCountAll(Object.assign({
            where: searchParams
        }, handlePageParams(req)))
        return res.json(R.ok(req, { data: dictTypeList, msg: 'REQUEST_SUCCESS' }))
    } catch (e) {
        return res.json(R.error(req, getValidateErrorList(e)))
    }
}

export const createDictType = async (req, res) => {
    try {
        const dictTypeModel = req.body
        await DictType.create(dictTypeModel)
        return res.json(R.ok(req))
    } catch (e) {
        return res.json(R.error(req, getValidateErrorList(e)))
    }
}

export const updateDictType = async (req, res) => {
    try {
        const dictTypeModel = req.body
        await DictType.update(dictTypeModel, {
            where: {
                id: dictTypeModel.id
            },
            fields: ['dictCode', 'dictName', 'remarks', 'updateBy']
        })
        return res.json(R.ok(req))
    } catch (e) {
        return res.json(R.error(req, getValidateErrorList(e)))
    }
}

export const deleteDictType = async (req, res) => {
    try {
        const { ids } = req.body
        if (!ids || !ids.length) {
            return res.json(R.error(req, { code: HTTP_CODE.INVALID_REQUEST, msg: 'PARAMS_IS_EMPTY' }))
        }
        console.log(ids)
        await DictType.destroy({
            where: {
                id: {
                    [Op.in]: ids
                }
            }
        })
        return res.json(R.ok(req))
    } catch (e) {
        return res.json(R.error(req, getValidateErrorList(e)))
    }
}

export const getDictDataPage = async (req, res) => {
    try {
        const { dictCode, keywords } = req.query
        const keywordsParams = keywords ? {
            [Op.or]: [
                { dictCode: { [Op.like]: `%${keywords}%` } },
                { dictLabel: { [Op.like]: `%${keywords}%` } }
            ]
        } : {}
        const dictCodeParams = dictCode ? { dictCode: dictCode } : {}
        const dictTypeList = await DictTypeData.findAndCountAll(Object.assign({
            where: { ...dictCodeParams, ...keywordsParams }
        }, handlePageParams(req)))
        return res.json(R.ok(req, { data: dictTypeList, msg: 'REQUEST_SUCCESS' }))
    } catch (e) {
        return res.json(R.error(req, getValidateErrorList(e)))
    }
}

export const getDictAll = async (req, res) => {
    try {
        const dictAllList = await DictType.findAll({
            include: {
                model: DictTypeData,
                as: 'list',
                // 预先加载, 将 OUTER JOIN 转为 INNER JOIN
                required: true,
                attributes: {
                    // 只要某些字段 & 不需要某些字段 & 重写字段名称
                    exclude: ['dictCode', 'createBy', 'createTime', 'updateBy', 'updateTime']
                }
            }
        })
        return res.json(R.ok(req, { data: dictAllList, msg: 'REQUEST_SUCCESS' }))
    } catch (e) {
        return res.json(R.error(req, getValidateErrorList(e)))
    }
}
