module.exports = (sequelize, DataTypes) => {

    const Trans = sequelize.define("transaction", {
        id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      id_user: {
        type: DataTypes.INTEGER,
        // references:{
        //   model:'user',
        //   key:'id'
        // }
      },
      id_mobil: {
        type: DataTypes.INTEGER,
        // references:{
        //   model:'mobil',
        //   key:'id'
        // }
      },
      tanggal_pinjam:{
          type: DataTypes.DATEONLY,
           
      },
      tanggal_kembali:{
          type: DataTypes.DATEONLY,
      },
      lamapinjam:{
        type: DataTypes.INTEGER,
      },
      total:{
        type: DataTypes.INTEGER,
      },
      status_bayar:{
        type: DataTypes.BOOLEAN,
      }
    })

    return Trans

}