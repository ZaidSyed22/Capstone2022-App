'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Properties extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Properties.init({
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.SRING,
    price: DataTypes.STRING,
    rent: DataTypes.STRING,
    rentGrowth: DataTypes.STRING,
    capex: DataTypes.STRING,
    vacancy: DataTypes.STRING,
    period: DataTypes.INTEGER,
    purchasePrice: DataTypes.INTEGER,
    units: DataTypes.INTEGER,
    xAxis: DataTypes.INTEGER,
    yAxis: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Properties',
  });
  return Properties;
};