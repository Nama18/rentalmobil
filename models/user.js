module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define("user", {
        id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      nama: {
        allowNull: false,
        type: DataTypes.STRING
      },
      email: {
        allowNull : false,
        type: DataTypes.STRING,
        unique: true,
      },
    })

    return User

}