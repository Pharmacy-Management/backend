module.exports = (sequelize, DataTypes) => {
    const Inventory = sequelize.define('Inventory', {
      medicineId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Medicines',
          key: 'id',
        },
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return Inventory;
  };
  