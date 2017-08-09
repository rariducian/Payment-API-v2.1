var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

var Cust = require('./models/cust');

// Connect to mongoose
var db = mongoose.connect('mongodb://localhost/payment', {
    useMongoClient: true,
});

// Send content to html
app.get('/', function(req, res){
    res.send('Please use /api/card or api/cust');
});

// API Call for cust data
app.get('/api/cust', function(req, res){
    Cust.getCusts(function(err, custs){
        if(err){
            throw err;
        }
        res.json(custs);
    });
});

// API Push for cust data
app.post('/api/cust', function(req, res){
    var cust = req.body;
    Cust.addCust(cust, function(err, cust){
        if(err){
            throw err;
        }
        res.json(cust);
    });
});

// API update for cust data
app.put('/api/cust/:_id', function(req, res){
    var id = req.params._id;
    var cust = req.body;
    Cust.updateCust(id, cust, {}, function(err, cust){
        if(err){
            throw err;
        }
        res.json(cust);
    });
});

// API delete for cust data
app.delete('/api/cust/:_id', function(req, res){
    var id = req.params._id;
    Cust.removeCust(id, function(err, cust){
        if(err){
            throw err;
        }
        res.json(cust);
    });
});

// Connect to port
app.listen(3000);
console.log('connected to port...');
