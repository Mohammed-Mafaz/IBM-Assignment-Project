const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/config.js').development;

// Initialize Sequelize
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
});

// Import Models
const Book = require('./book')(sequelize, DataTypes);
const Publisher = require('./publisher')(sequelize, DataTypes);
const BookAuthor = require('./bookAuthor')(sequelize, DataTypes);
const BookCopy = require('./bookCopy')(sequelize, DataTypes);
const BookLending = require('./bookLending')(sequelize, DataTypes);
const Card = require('./card')(sequelize, DataTypes);
const LibraryBranch = require('./libraryBranch')(sequelize, DataTypes);

sequelize.sync({ alter: true })
    .then(() => {
        console.log('All models were synchronized successfully.');
    })
    .catch((err) => {
        console.error('Error synchronizing models:', err);
    });


// Define Relationships
Book.belongsTo(Publisher, { foreignKey: 'publisherId' });
Book.hasMany(BookCopy, { foreignKey: 'bookId' });
BookCopy.belongsTo(Book, { foreignKey: 'bookId' });
BookCopy.belongsTo(LibraryBranch, { foreignKey: 'libraryBranchId' });
BookLending.belongsTo(BookCopy, { foreignKey: 'bookCopyId' });
BookLending.belongsTo(Card, { foreignKey: 'cardId' });
Card.hasMany(BookLending, { foreignKey: 'cardId' });
LibraryBranch.hasMany(BookCopy, { foreignKey: 'libraryBranchId' });

// Export Sequelize Instance and Models
module.exports = {
    sequelize,
    Book,
    Publisher,
    BookAuthor,
    BookCopy,
    BookLending,
    Card,
    LibraryBranch,
};
