import { DataTypes } from 'sequelize'
import { sequelize } from '../../mysql/index.js'

export default sequelize.define('user', {
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "主键"
    },
    acount: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        comment: "用户账号",
        validate: {
            notNull: {
                msg: 'ACOUNT_IS_EMPTY'
            },
            notEmpty: {
                msg: 'ACOUNT_IS_EMPTY'
            }
        }
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        comment: "用户密码",
        validate: {
            notNull: {
                msg: 'PASSWORD_IS_EMPTY'
            },
            notEmpty: {
                msg: 'PASSWORD_IS_EMPTY'
            }
        }
    },
    nickName: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "用户名称",
        field: 'nick_name'
    },
    avatar: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "用户头像"
    },
    sex: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "用户性别(字典Id)"
    },
    language: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0,
        comment: "用户语言(字典Id)"
    },
    phone: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "联系电话"
    },
    email: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "关联邮箱"
    },
    createBy: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "创建人",
        field: 'create_by'
    },
    createTime: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "创建时间",
        field: 'create_time'
    },
    updateBy: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "更新人",
        field: 'update_by'
    },
    updateTime: {
        type: DataTypes.DATE,
        allowNull: true,
        comment: "更新时间",
        field: 'update_time'
    }
}, {
    indexes: [{ unique: true, fields: ['acount'] }]
})
