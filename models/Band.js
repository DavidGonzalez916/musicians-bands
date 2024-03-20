const {sequelize, DataTypes} = require('../db');

// TODO - define the Band 
const Band = sequelize.define('Band', {

    name: DataTypes.STRING,
    genre: DataTypes.STRING

});

module.exports = {
    Band
};