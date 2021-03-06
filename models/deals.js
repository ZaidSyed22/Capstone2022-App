'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class deals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  deals.init({
    username: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    squareFeet: DataTypes.INTEGER,
    units: DataTypes.INTEGER,
    rentPsf: DataTypes.INTEGER,
    rentGrowth: DataTypes.INTEGER,
    period: DataTypes.INTEGER,
    purchasePrice: DataTypes.INTEGER,
    propertyType: DataTypes.STRING,
    propertyClass: DataTypes.STRING,
    capex: DataTypes.DECIMAL,
    vacancyRate: DataTypes.DECIMAL,
    capRate: DataTypes.DECIMAL,
    costOfCapital: DataTypes.DECIMAL,
    salePrice: DataTypes.DECIMAL,
    propertyIncome: DataTypes.ARRAY(DataTypes.DECIMAL),
    propertyNpv: DataTypes.DECIMAL,
    years: DataTypes.ARRAY(DataTypes.INTEGER),
    coordinates: DataTypes.ARRAY(DataTypes.DECIMAL),
  }, {
    sequelize,
    modelName: 'deals',
  });
  return deals;
};