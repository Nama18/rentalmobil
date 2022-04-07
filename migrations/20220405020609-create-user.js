'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nama: {
        type: Sequelize.STRING
      },
      email: {
        allowNull : false,
        type: Sequelize.STRING,
        unique: true,
      },
      createdAt:{
        type: Sequelize.DATE
      },
      updatedAt:{
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      jenis: {
        type: Sequelize.STRING
      },
      harga:{
        type: Sequelize.INTEGER
      },
      createdAt:{
        type: Sequelize.DATE
      },
      updatedAt:{
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_user:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'users',
          key:'id'
        }
      },
      id_mobil:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'cars',
          key:'id'
        }
      },
      tanggal_pinjam:{
        type: Sequelize.DATEONLY,

      },
      tanggal_kembali:{
          type: Sequelize.DATEONLY,
      },
      status_bayar:{
        type: Sequelize.BOOLEAN,
      },
      createdAt:{
        type: Sequelize.DATE
      },
      updatedAt:{
        type: Sequelize.DATE
      }
    });
    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
    await queryInterface.dropTable('cars');
    await queryInterface.dropTable('users');
  }
};