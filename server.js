
const express = require('express');

const app = express();
const routes = require('./routes/index.js');

app.use('/', routes);

//app.use(express.static('public'));

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
