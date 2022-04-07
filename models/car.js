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
      harga:{
        allowNull: false,
        type: DataTypes.INTEGER
      },
      ketersedian:
      {
        type: DataTypes.BOOLEAN,
        defaultValue:true,
      }
    })

    return Car

}