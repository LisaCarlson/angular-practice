var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/api/vi/guitars', function (req, res) {
  res.json([
    {id:1, make:'Martin', model:'D15'},
    {id: 2, make:'Fender', model:'Stratocaster'}
  ])
});

router.get('*', function(req, res, next) {
  res.sendFile('index.html', {
    root: __dirname + '/../public'
  })
});

module.exports = router;
