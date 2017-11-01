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
    let cur = history.find({},'name date -_id').sort({date:-1}).limit(10).then(results=>{
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(results,null,3));
  })
});

router.get('/search/:q', (req, res) => {
  imgur.create_image(req.params.q, req.query.offset).then(ans => {
    
    new history({ name:req.params.q }).save();
    
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(ans,null,3));
  })
  
});

module.exports = router;