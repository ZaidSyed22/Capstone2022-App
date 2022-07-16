'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('deals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      zip: {
        type: Sequelize.INTEGER
      },
      squareFeet: {
        type: Sequelize.INTEGER
      },
      units: {
        type: Sequelize.INTEGER
      },
      rentPsf: {
        type: Sequelize.INTEGER
      },
      rentGrowth: {
        type: Sequelize.INTEGER
      },
      capex: {
        type: Sequelize.INTEGER
      },
      period: {
        type: Sequelize.INTEGER
      },
      purchasePrice: {
        type: Sequelize.INTEGER
      },
      capRate: {
        type: Sequelize.INTEGER
      },
      costOfCapital: {
        type: Sequelize.INTEGER
      },
      propertyIncome: {
        type: Sequelize.INTEGER
      },
      propertyCashFlows: {
        type: Sequelize.INTEGER
      },
      propertyNpv: {
        type: Sequelize.INTEGER
      },
      propertyCashFlows: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('deals');
  }
};