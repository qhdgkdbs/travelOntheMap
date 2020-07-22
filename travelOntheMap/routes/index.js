var express = require('express');
var router = express.Router();
const { Spot } = require("../models/Spot");
const dataSave = require("../public/data/_data")

/* GET home page. */
router.get('/', function(req, res, next) {  
  res.render('index', { title: 'Express' })
});


module.exports = router;
