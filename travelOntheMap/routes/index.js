var express = require('express');
var router = express.Router();
const { Spot } = require("../models/Spot");
const dataSave = require("../public/data/_data")

/* GET home page. */
router.get('/', function(req, res, next) {  
  res.render('index', { title: 'Express' })
});

router.get('/columbus', function(req, res, next) {  
  res.render('columbus', { title: 'Express' })
});

router.get('/mylist', function(req, res, next) {  
  res.render('mylist', { title: 'Express' })
});

router.get('/updateinfo', function(req, res, next) {  
  res.render('updateinfo', { title: 'Express' })
});


module.exports = router;
