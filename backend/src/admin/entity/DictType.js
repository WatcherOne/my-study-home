/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-18 15:44:12
 * Description: DictType实体类
*************************************************************/
import Sequelize from 'sequelize'
import { sequelize } from '../../mysql/index.js'

export const DictType = sequelize.define('dict_type', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    dictCode: {
        type: Sequelize.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false,
        field: 'dict_code'
    },
    dictName: {
        type: Sequelize.STRING,
        field: 'dict_name'
    },
    remarks: {
        type: Sequelize.STRING
    }
})
