'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Add 'authorId' column to 'books' table
    await queryInterface.addColumn('books', 'authorId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'book_authors',  // Reference to 'book_authors' table
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  async down (queryInterface, Sequelize) {
    // Revert changes made in 'up' method by removing the 'authorId' column
    await queryInterface.removeColumn('books', 'authorId');
  }
};
