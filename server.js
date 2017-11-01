
const express = require('express');
const app = express();
const routes = require('./routes/routes.js');
const mongoose = require('mongoose');
const mongo = require('mongodb');

mongoose.connect(process.env.MONGOLAB_URI);
mongoose.Promise = global.Promise;

app.use('/', routes);
app.use(express.static(__dirname + '/public'));

console.log(__dirname)
// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
