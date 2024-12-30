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
            timestamps: false, // Disable createdAt and updatedAt columns
        }
    );

    return BookAuthor;
};
