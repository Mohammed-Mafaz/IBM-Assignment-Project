const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Publisher = sequelize.define(
        'Publisher',
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
            tableName: 'publishers',
            timestamps: false,
        }
    );

    return Publisher;
};
