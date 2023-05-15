/*************************************************************
 * Author: zhubo
 * Emails: <286154864@qq.com>
 * CreateTime: 2023-05-15 14:03:48
 * Description: User实体类
*************************************************************/
import Sequelize from 'sequelize'
import { sequelize } from '../../mysql/index.js'

// user: 表名
// attributes: 参数名
export const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true
    },
    acount: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nickName: {
        type: Sequelize.STRING,
        field: 'nick_name'
    },
    sex: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
}, {
    createdAt: 'create_by',
    updatedAt: 'update_by'
})

 