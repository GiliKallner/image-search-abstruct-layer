const express = require('express');
const router = express.Router();
const imgur = require('../services/imgur.js');
const path = require('path');
const history = require('../db-models/history.js');
//const views = require('../views/index.html');

router.get('/', (req, res) => {  
  res.sendFile(path.join('/app/views/index.html'));
});

router.get('/latest', (req, res) => {
  
});

router.get('/search/:query', (req, res) => {
  imgur.create_image(req.params.query, req.query.offset).then(ans => {
    
    new history({ name:req.params.query, date: new Date().now() }).save();
    
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(ans,null,3));
  })
  
});

module.exports = router;