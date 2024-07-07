const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('pharmacy', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
