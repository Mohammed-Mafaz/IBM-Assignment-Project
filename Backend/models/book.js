const { DataTypes } = require('sequelize'); // Ensure DataTypes is imported

module.exports = (sequelize) => {
    const Book = sequelize.define(
        'Book',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            isbn: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
            },
            publisherId: {
                type: DataTypes.INTEGER,
                allowNull: true, // Allow null if a book doesn't have a publisher
                references: {
                    model: 'publishers', // Ensure 'publishers' matches the table name in the Publisher model
                    key: 'id',
                },
                onUpdate: 'CASCADE', // Ensures changes to the referenced row update this field
                onDelete: 'SET NULL', // If the referenced publisher is deleted, set this field to NULL
            },
        },
        {
            tableName: 'books',
            timestamps: false, // Disable createdAt and updatedAt columns if not needed
        }
    );

    return Book;
};
