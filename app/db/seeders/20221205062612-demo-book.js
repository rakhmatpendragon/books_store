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
      'books', 
      [
        {
          category: 1,
          user: 1,
          title: 'Design Pemula',
          author: 'Sang Petualang',
          image: '/uploads/Design Pemula.png',
          publishDate: new Date(),
          price: 75000,
          stock: 1,
          createdAt : new Date(),
          updatedAt: new Date()
        },
        {
          category: 1,
          user: 1,
          title: 'Modern Spaces',
          author: 'Sang Petualang',
          image: '/uploads/Modern Spaces.png',
          publishDate: new Date(),
          price: 85000,
          stock: 1,
          createdAt : new Date(),
          updatedAt: new Date()
        },
        {
          category: 2,
          user: 1,
          title: 'The Frailty of a Woman',
          author: 'Sang Petualang',
          image: '/uploads/The Frailty of a Woman.png',
          publishDate: new Date(),
          price: 125000,
          stock: 1,
          createdAt : new Date(),
          updatedAt: new Date()
        },
        {
          category: 3,
          user: 1,
          title: 'The Mind of a Leader',
          author: 'Sang Pejuang',
          image: '/uploads/The Mind of a Leader.png',
          publishDate: new Date(),
          price: 95000,
          stock: 1,
          createdAt : new Date(),
          updatedAt: new Date()
        },
        {
          category: 3,
          user: 1,
          title: 'The Way of the Nameless',
          author: 'Sang Pejuang',
          image: 'uploads/The Way of the Nameless.png',
          publishDate: new Date(),
          price: 75000,
          stock: 1,
          createdAt : new Date(),
          updatedAt: new Date()
        }
      ], 
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('books', null, {});
  }
};
