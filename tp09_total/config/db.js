var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://127.0.0.1/tp09', { useNewUrlParser: true });

module.exports = connection;