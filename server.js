
const express = require('express');
const imgur = require('./services/imgur.js');

const app = express();


app.use(express.static('public'));

app.get("/", function (request, response) {
  console.log(imgur.create_image('puppies'));
  response.sendFile(__dirname + '/views/index.html');
});




// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
