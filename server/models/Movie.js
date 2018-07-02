let mongoose = require('mongoose');
let schema = require('../schemas/Movies');

module.exports =  mongoose.model('Movie', schema);