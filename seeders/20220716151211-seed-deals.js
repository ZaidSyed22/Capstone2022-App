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
      rentPsf: '400',
      period: '15',
      squareFeet: '20000',
      units: '250',
      rentGrowth: '3',
      propertyType: 'Hotel',
      propertyClass: 'A',
      capex: '0.05',
      vacancyRate: '0.05',
      capRate: '0.04',
      costOfCapital: '0.06',
      salePrice: '204766834',
      propertyIncome: [5415000,5577450,5744773.5,5917116.71,6094630.21,6277469.11,6465793.19,6659766.98,6859559.99,7065346.79,7277307.19,7495626.41,7720495.2,7952110.06,8190673.36],
      propertyNpv: '57412461.46',
      years: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,],
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
      capex: '0.1',
      vacancyRate: '0.1',
      capRate: '0.06',
      costOfCapital: '0.065',
      salePrice: '24018386.833333332',
      propertyIncome: [1012500,1053000,1095120,1138924.8,1184481.79,1231861.06,1281135.51,1332380.93,1385676.16,1441103.21],
      propertyNpv: '6522221.23',
      years: [1,2,3,4,5,6,7,8,9,10],
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
      squareFeet: '6000',
      units: '800',
      rentGrowth: '3',
      propertyType: 'Office',
      propertyClass: 'B',
      capex: '0.1',
      vacancyRate: '0.1',
      capRate: '0.06',
      costOfCapital: '0.065',
      salePrice: '63411976.66666667',
      propertyIncome: [2916000,3003480,3093584.4,3186391.93,3281983.69,3380443.2,3481856.5,3586312.19,3693901.56,3804718.6],
      propertyNpv: '62793573.33',
      years: [1,2,3,4,5,6,7,8,9,10],
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
      squareFeet: '10000',
      units: '35',
      rentGrowth: '4',
      propertyType: 'Hotel',
      propertyClass: 'C',
      capex: '0.15',
      vacancyRate: '0.15',
      capRate: '0.08',
      costOfCapital: '0.07',
      salePrice: '45709649.5',
      propertyIncome: [2890000,3005600,3125824,3250856.96,3380891.24,3516126.89,3656771.96],
      propertyNpv: '49477860.48',
      years: [1,2,3,4,5,6,7],
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
