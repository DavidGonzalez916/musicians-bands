const { Band } = require('./models/Band')
const { Musician } = require('./models/Musician')
const { Song } = require("./models/Song")
// Define associations here
// band and muscian: one to many
Band.hasMany(Musician);
Musician.belongsTo(Band); 

// band to song many to many 
Band.belongsToMany(Song, {through: "BandtoSong"});
Song.belongsToMany(Band, {through: "BandtoSong"}); 



module.exports = {
    Band,
    Musician,
    Song
};
