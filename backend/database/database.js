//modulos importados
const Sequelize = require("sequelize")
require("dotenv").config()

const connection = new Sequelize('borAdotar', 'root', process.env.DATABASE_CONNECTION, {
    host: 'localhost', 
    dialect: 'mysql', 
    timezone: "-03:00"
})

module.exports = connection