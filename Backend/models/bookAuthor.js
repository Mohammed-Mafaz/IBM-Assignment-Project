const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const BookAuthor = sequelize.define(
    'BookAuthor',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'book_authors',
      timestamps: false,
    }
  );

  // One Author can have many Books
  BookAuthor.associate = function(models) {
    BookAuthor.hasMany(models.Book, {
      foreignKey: 'authorId', // Associate with the book's authorId field
      as: 'books', // Alias for the relationship
    });
  };

  return BookAuthor;
};
