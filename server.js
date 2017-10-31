
var express = require('express');
var app = express();
const GoogleImages = require('google-images');
const client = new GoogleImages(process.env.CSE_ID,process.env.CSE_API_KEY);
client.search('dog').then(images =>{
  console.log(images);
});


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
