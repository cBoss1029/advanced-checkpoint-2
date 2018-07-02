let mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title: {
    required: true,
    type: String
     },
    genre: {
    required: true,
    type: String
    },
    director: {
    required: true,
    type: String
    },
    releaseDate: {
    required: true,
    type: String
    },
    rating: {
    required: true,
    type: String
    },
});

module.exports =  schema;