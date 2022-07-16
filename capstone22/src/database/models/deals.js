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
    capex: DataTypes.INTEGER,
    period: DataTypes.INTEGER,
    purchasePrice: DataTypes.INTEGER,
    capRate: DataTypes.INTEGER,
    costOfCapital: DataTypes.INTEGER,
    propertyIncome: DataTypes.INTEGER,
    propertyCashFlows: DataTypes.INTEGER,
    propertyNpv: DataTypes.INTEGER,
    propertyCashFlows: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'deals',
  });
  return deals;
};