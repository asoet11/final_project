const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres://user:password@host:port/db_name')

module.exports = sequelize