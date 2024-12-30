const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const BookCopy = sequelize.define(
        'BookCopy',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            bookId: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'books',
                    key: 'id',
                },
            },
            libraryBranchId: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'library_branches',
                    key: 'id',
                },
            },
            availableCopies: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            tableName: 'book_copies',
            timestamps: false,
        }
    );

    return BookCopy;
};
