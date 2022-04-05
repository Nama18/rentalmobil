const dbConfig = require('../config/dbConfig.js');

const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,

        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

// db.products = require('./productModel.js')(sequelize, DataTypes)
// db.reviews = require('./reviewModel.js')(sequelize, DataTypes)
db.user = require('./user')(sequelize, DataTypes)
db.car = require('./car')(sequelize, DataTypes)
db.trans = require('./transaction')(sequelize, DataTypes)

db.sequelize.sync({ force: false , alter: true })
.then(() => {
    console.log('yes re-sync done!')
})



// // 1 to Many Relation

db.trans.belongsTo(db.user, {
    foreignKey: 'id_user',
    as: 'users'
})

db.trans.belongsTo(db.car, {
    foreignKey: 'id_mobil',
    as: 'cars'
})





module.exports = db