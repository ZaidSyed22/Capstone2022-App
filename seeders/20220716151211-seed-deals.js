'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.bulkInsert('deals', [{
      username: 'guest',
      address: '1 Lodge St',
      city: 'Asheville',
      state: 'NC',
      zip: '28803',
      price: '250000000',
      rentPerSF: '500',
      holdingPeriod: '15',
      sf: '20000',
      units: '250',
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      username: 'zsyed',
      address: '1 AMB Drive Northwest',
      city: 'Atlanta',
      state: 'GA',
      zip: '30334',
      price: '30000000',
      rentPerSF: '300',
      holdingPeriod: '10',
      sf: '25000',
      units: '80',
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      username: 'ddonato',
      address: '310 4th St',
      city: 'Niagara Falls',
      state: 'NY',
      zip: '14303',
      price: '35000000',
      rentPerSF: '600',
      holdingPeriod: '10',
      sf: '20000',
      units: '800',
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      username: 'smoon',
      address: '1 Wild Turkey Way',
      city: 'Hamburg',
      state: 'NJ',
      zip: '07419',
      price: '20000000',
      rentPerSF: '400',
      holdingPeriod: '7',
      sf: '200000',
      units: '35',
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
