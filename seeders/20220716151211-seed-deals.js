'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('deals', [{
      username: 'guest',
      address: '1 Lodge St',
      city: 'Asheville',
      state: 'NC',
      zip: '28803',
      purchasePrice: '250000000',
      rentPsf: '500',
      period: '15',
      squareFeet: '20000',
      units: '250',
      rentGrowth: '3',
      propertyType: 'Hotel',
      propertyClass: 'A',
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      username: 'zsyed',
      address: '1 AMB Drive Northwest',
      city: 'Atlanta',
      state: 'GA',
      zip: '30334',
      purchasePrice: '30000000',
      rentPsf: '300',
      period: '10',
      squareFeet: '25000',
      units: '80',
      rentGrowth: '4',
      propertyType: 'Retail',
      propertyClass: 'B',
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      username: 'ddonato',
      address: '310 4th St',
      city: 'Niagara Falls',
      state: 'NY',
      zip: '14303',
      purchasePrice: '35000000',
      rentPsf: '600',
      period: '10',
      squareFeet: '20000',
      units: '800',
      rentGrowth: '5',
      propertyType: 'Office',
      propertyClass: 'B',
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      username: 'smoon',
      address: '1 Wild Turkey Way',
      city: 'Hamburg',
      state: 'NJ',
      zip: '07419',
      purchasePrice: '20000000',
      rentPsf: '400',
      period: '7',
      squareFeet: '200000',
      units: '35',
      rentGrowth: '7',
      propertyType: 'Multifamily',
      propertyClass: 'C',
      createdAt: new Date(),
      updatedAt: new Date()
      }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
