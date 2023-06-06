import { DataTypes } from 'sequelize'
import { sequelize } from '@/db/config/index.js'

export const DictType = sequelize.define('dict_type', {
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "主键"
    },
    dictCode: {
        type: DataTypes.STRING(100),
        primaryKey: true,
        unique: true,
        comment: "字典编码（用于标识哪种类型的字典）",
        field: 'dict_code',
        allowNull: false,
        validate: {
            notNull: {
                msg: 'DICT_CODE_IS_EMPTY'
            },
            notEmpty: {
                msg: 'DICT_CODE_IS_EMPTY'
            }
        }
    },
    dictName: {
        type: DataTypes.STRING(100),
        comment: "字典名称",
        field: 'dict_name',
        allowNull: false,
        validate: {
            notNull: {
                msg: 'DICT_NAME_IS_EMPTY'
            },
            notEmpty: {
                msg: 'DICT_NAME_IS_EMPTY'
            }
        }
    },
    remarks: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "备注"
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
    indexes: [{ unique: true, fields: ['dictCode'] }]
})

export const DictTypeData = sequelize.define('dict_type_data', {
    id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "主键Id"
    },
    dictCode: {
        type: DataTypes.STRING(100),
        allowNull: true,
        comment: "字典编码（关联的字段编码）",
        field: 'dict_code'
    },
    dictLabel: {
        type: DataTypes.STRING(255),
        allowNull: true,
        comment: "字典标签",
        field: 'dict_label'
    },
    dictValue: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "字典键值",
        field: 'dict_value'
    },
    dictSort: {
        type: DataTypes.INTEGER,
        allowNull: true,
        comment: "字典排序",
        field: 'dict_sort'
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

// 应用于 hasOne 和 hasMany 关联
// 但是在定义关联时, 我们提供了 sourceKey, 而不是提供 targetKey
// 这是因为与 belongsTo 不同, hasOne 和 hasMany关联将外键保留在目标模型上
DictType.hasMany(DictTypeData, {
    sourceKey: 'dictCode',
    as: 'list',
    foreignKey: 'dictCode'
})
