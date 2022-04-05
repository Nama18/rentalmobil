module.exports = (sequelize, DataTypes) => {

    const Car = sequelize.define("car", {
        id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      jenis: {
        allowNull: false,
        type: DataTypes.STRING
      },
      ketersediaan: {
        allowNull : false,
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    })

    return Car

}