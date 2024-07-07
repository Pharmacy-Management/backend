const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user')(sequelize, Sequelize);
const Medicine = require('./medicine')(sequelize, Sequelize);
const Inventory = require('./inventory')(sequelize, Sequelize);

module.exports = {
  User,
  Medicine,
  Inventory,
  sequelize,
};
