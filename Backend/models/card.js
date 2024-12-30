const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Card = sequelize.define(
        'Card',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            holderName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: 'cards',
            timestamps: false,
        }
    );

    return Card;
};
