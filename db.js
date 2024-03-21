const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');

// TODO - create the new sequelize connection
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db.sqlite' ,
    logging: false
})

module.exports = {
    sequelize,
    DataTypes
};
