
const express = require('express');
const app = express();
const routes = require('./routes/routes.js');
const mongoose = require('mongoose');
const mongo = require('mongodb').MongoClient;

//

/*mongo.connect(process.env.MONGOLAB_URI,(err,data)=>{
  if(err) throw err;
  else console.log(data);
});
//mongo.Promise = global.Promise;
*/
app.use('/', routes);



// listen for requests :)
const listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
