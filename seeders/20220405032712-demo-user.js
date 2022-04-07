'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
        'users',
        [
          {
            nama: 'mario',
            email:'nathanelmario@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            nama: 'eyon',
            email:'kevingideon@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            nama: 'nama',
            email:'namamar02@gmail.com',
            createdAt: new Date(),
            updatedAt: new Date()
          },
        ],
        {}
    );
    await queryInterface.bulkInsert(
        'cars',
        [
          {
            jenis: 'toyota',
            harga: 360000,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            jenis: 'honda',
            harga: 380000,
            createdAt: new Date(),
            updatedAt: new Date()
          },
          {
            jenis: 'mitsubisi',
            harga: 370000,
            createdAt: new Date(),
            updatedAt: new Date()
          },

        ],
        {}
    );
    await queryInterface.bulkInsert(
        "transactions",
      [
        {
          id_user: 1,
          id_mobil:3,
          tanggal_pinjam:"2022-03-18",
          tanggal_kembali:"2022-03-26",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
    
      
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
