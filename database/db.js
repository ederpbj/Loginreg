const Sequelize = require('sequelize')
require('dotenv/config');

const db = {}
const sequelize = new Sequelize(
  process.env.DB_TABLE,
  process.env.DB_NAME,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db