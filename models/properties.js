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
    squareFeet: DataTypes.STRING,
    units: DataTypes.STRING,
    rentPsf: DataTypes.STRING,
    rentGrowth: DataTypes.STRING,
    capex: DataTypes.STRING,
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
    modelName: 'Properties',
  });
  return Properties;
};