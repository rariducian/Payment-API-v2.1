var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Genre Schema
var genreSchema = new Schema({
    name:{
      type: String,
      required: true
    },
    create_date:{
      type: Date,
      default: Date.now
    }
}, {collection: 'genres'});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

// get genres
module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit);
}
