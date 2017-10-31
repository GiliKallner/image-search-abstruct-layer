const express = require('express');
const router = express.Router();
const imgur = require('./imgur.js');

router.get('/', (req, res) => {
 // res.sendFile(__dirname + '/views/index.html');
res.send('hello');
});

router.get('/latest', (req, res) => {
});

router.get('/search/:q', (req, res) => {
  imgur.create_image(req.params.q, req.query.offset).then(ans => {
      res.json(ans);
  })
  
});

module.exports = router;