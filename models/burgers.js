module.exports = (sequelize, DataTypes) => {
    const Burgers = sequelize.define('burgers', {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    });

    // Burgers.associate = (models) => {
    //     Burgers.belongsTo(models.Customer, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };
    return Burgers;
}