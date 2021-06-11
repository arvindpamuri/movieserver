const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = new Schema({
    Name: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

var Genres = mongoose.model('Genre', genreSchema);

module.exports = Genres;