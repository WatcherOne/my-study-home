import { DataTypes } from 'sequelize'
import { sequelize } from '@/db/config/index.js'

export default sequelize.define('author', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "主键"
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        comment: "作者姓名"
    },
    nameEn: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "作者英文名",
        field: 'name_en'
    },
    yearBirth: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "出生年份",
        field: 'year_birth'
    },
    yearDead: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "死亡年份",
        field: 'year_dead'
    },
    nation: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "作者国籍（关联字典Id）"
    },
    introdution: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "作者描述"
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
