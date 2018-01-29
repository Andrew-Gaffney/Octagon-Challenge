const db = require('../db');
const Sequelize = require('sequelize');

const Users = db.define('Users', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  zipCode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  message: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Users;
