'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      'categories',
      [
        {
          name: "Fiction",
          user: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Non Fiction",
          user: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Old Fiction",
          user: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('categories', null, {});
  }
};
