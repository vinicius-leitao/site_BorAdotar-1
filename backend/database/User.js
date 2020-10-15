const sequelize = require("sequelize")
const connection = require("./database")

const User = connection.define('users', {
    name: {
        type: sequelize.STRING, 
        allowNull: false
    }, lastname: {
        type: sequelize.STRING,
        allowNull: false
    }, email: {
        type: sequelize.TEXT,
        allowNull: false
    }, password: {
        type: sequelize.TEXT,
        allowNull: false
    }, date: {
        type: sequelize.DATE,
        allowNull: false
    }, location: {
        type: sequelize.TEXT,
        allowNull: false
    }
})

// User.sync({force: true})

module.exports = User