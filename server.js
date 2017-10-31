
var express = require('express');
var app = express();
var imageSearch = require('node-google-image-search');
var results = imageSearch('dog', callback, 0, 5);

function callback(results) {
  console.log(results);
}

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


app.post("/dreams", function (request, response) {
  response.sendStatus(200);
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
