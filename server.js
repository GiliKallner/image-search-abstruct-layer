
const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/routes.js');

//app.set('views', path.join(__dirname, 'views'));

app.use('/', routes);

//app.use(express.static(__dirname + '/public'));

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
