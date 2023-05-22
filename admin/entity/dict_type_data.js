const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dict_type_data', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "主键Id"
    },
    dict_type: {
      type: DataTypes.STRING(100),
      allowNull: true,
      comment: "字典类型（关联的字段编码）"
    },
    dict_label: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "字典标签"
    },
    dict_value: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "字典键值"
    },
    dict_sort: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "字典排序"
    }
  }, {
    sequelize,
    tableName: 'dict_type_data',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
