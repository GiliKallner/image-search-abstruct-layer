
const express = require('express');
const app = express();
const routes = require('./routes/routes.js');

app.use('/', routes);

// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
