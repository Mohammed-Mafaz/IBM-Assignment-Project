const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const LibraryBranch = sequelize.define(
        'LibraryBranch',
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
            location: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: 'library_branches',
            timestamps: false,
        }
    );

    return LibraryBranch;
};
