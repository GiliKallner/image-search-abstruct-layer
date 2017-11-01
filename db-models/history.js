const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('History',schema); 