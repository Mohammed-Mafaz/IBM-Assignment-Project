const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const BookLending = sequelize.define(
        'BookLending',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            bookCopyId: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'book_copies',
                    key: 'id',
                },
            },
            cardId: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'cards',
                    key: 'id',
                },
            },
            borrowDate: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            returnDate: {
                type: DataTypes.DATE,
            },
        },
        {
            tableName: 'book_lending',
            timestamps: false,
        }
    );

    return BookLending;
};
