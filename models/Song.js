const {sequelize, DataTypes} = require('../db');

// TODO - define the Song model
const Song = sequelize.define('Song', {

    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    length: DataTypes.INTEGER
});

module.exports = {
    Song
};