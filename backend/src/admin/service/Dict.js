/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-15 14:42:00
 * Description: 业务层：字典数据
*************************************************************/
import { DictType } from '../entity/DictType.js'

export const getDictType = async (req, res) => {
    try {
        const dictTypeList = await DictType.findAndCountAll()
        return res.json(R.ok(req, { data: dictTypeList, msg: 'REQUEST_SUCCESS' }))
    } catch {
        return res.json(R.error(req, 'REQUEST_FAILED'))
    }
}
