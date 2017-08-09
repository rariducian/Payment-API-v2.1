var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Cust Schema
var custSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    create_date:{
        type: Date,
        default: Date.now
    }
}, {collection: 'cust'});

var Cust = module.exports = mongoose.model('Cust', custSchema);

// Get Cust
module.exports.getCusts = function(callback, limit){
    Cust.find(callback).limit(limit);
}

// Add Cust
module.exports.addCust = function(cust, callback){
    Cust.create(cust, callback);
}

// Update Cust
module.exports.updateCust = function(id, cust, options, callback){
    var query = {_id: id};
    var update = {
        firstName: cust.firstName,
        lastName: cust.lastName
    }
    Cust.findOneAndUpdate(query, update, options, callback);
}

// Delete Cust
module.exports.removeCust = function(id, callback){
    var query = {_id: id};
    Cust.remove(query, callback);
}
