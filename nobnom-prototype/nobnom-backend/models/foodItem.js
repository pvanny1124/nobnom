const uuidv1 = require('uuid/v1');

module.exports = (sequelize, DataTypes) => {
     
    const FoodItem = sequelize.define('FoodItems', {

      id: {
        type: DataTypes.UUIDV1,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        defaultValue: uuidv1()
      },
      menuId: {
        type: DataTypes.UUID,
        references: {
          type: DataTypes.UUID,
          references: {
              model: 'Vendors',
              key: 'menuId'
            },
        }
      },
      price: {
        type: DataTypes.INTEGER
      },
      itemName: {
        type: DataTypes.STRING
      },
      category: {
          type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  });

  FoodItem.associate = function (models) {
    // associations can be defined here
    FoodItem.belongsTo(models.Vendors, {foreignKey: "menuId", targetKey: "menuId"})
  };

  return FoodItem;
}

