var DataTypes = require("sequelize").DataTypes;
var _dict_type_data = require("./dict_type_data");

function initModels(sequelize) {
  var dict_type_data = _dict_type_data(sequelize, DataTypes);


  return {
    dict_type_data,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
