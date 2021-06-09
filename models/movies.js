const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    No: {
        type: Number,
        min: 1,
        required: true
    },
    Title: {
        type: String,
        required: true
    },
    Genre: {
        type: String,
        required: true
    },
    Rating: {
        type: Number,
    },
    Year: {
        type: Number
    }
},{
    timestamps: true
});

var Movies = mongoose.model('Movie', movieSchema);

module.exports = Movies;