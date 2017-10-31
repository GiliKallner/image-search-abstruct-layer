const express = require('express');
const router = express.Router();
const imgur = require('../services/imgur.js');
//const views = require('../views/index.html');

router.get('/', (req, res) => {
 // res.sendFile(__dirname + './views/index.html');
res.send('hello');
});

router.get('/latest', (req, res) => {
});

router.get('/search/:q', (req, res) => {
  imgur.create_image(req.params.q, req.query.offset).then(ans => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(ans,null,3));
  })
  
});

module.exports = router;