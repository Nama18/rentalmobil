'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
        'user',
        [
          {
            id :1,
            nama: 'mario',
            email:'nathanelmario@gmail.com',
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            id :2,
            nama: 'eyon',
            email:'kevingideon@gmail.com',
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            id :3,
            nama: 'nama',
            email:'namamar02@gmail.com',
            created_at: new Date(),
            updated_at: new Date()
          },
        ],
        {}
    );
    await queryInterface.bulkInsert(
        'car',
        [
          {
            id: 1,
            jenis: 'toyota',
            ketersediaan: true,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            id: 2,
            jenis: 'honda',
            ketersediaan: true,
            created_at: new Date(),
            updated_at: new Date()
          },
          {
            id: 3,
            jenis: 'mitsubisi',
            ketersediaan: true,
            created_at: new Date(),
            updated_at: new Date()
          },

        ],
        {}
    );
    await queryInterface.bulkInsert(
        "rental",
      [
        {
          id: 1,
          id_pelanggan: 1,
          id_mobil:3,
          created_at: new Date(),
          updated_at: new Date()
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
