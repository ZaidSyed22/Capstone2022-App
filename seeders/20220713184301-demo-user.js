'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Guest',
      lastName: 'Doe',
      email: 'guest@dgcrafts.com',
      username: 'guest',
      password: '',
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      firstName: 'Zaid',
      lastName: 'Syed',
      email: 'zsyed@dgcrafts.com',
      username: 'vbrew',
      password: '',
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      firstName: 'Daniel',
      lastName: 'Donato',
      email: 'ddonato@dgcrafts.com',
      username: 'ddonato',
      password: '',
      createdAt: new Date(),
      updatedAt: new Date()
      }, {
      firstName: 'Sam',
      lastName: 'Moon',
      email: 'smoon@dgcrafts.com',
      username: 'smoon',
      password: '',
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
