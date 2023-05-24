import { DataTypes } from 'sequelize'
import { sequelize } from '../../mysql/index.js'

export default sequelize.define('book_group', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "书单主键"
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        comment: "关联用户Id",
        field: 'user_id'
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        comment: "书单名称"
    },
    introduction: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "书单描述"
    },
    cover: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "书单封面"
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
})
