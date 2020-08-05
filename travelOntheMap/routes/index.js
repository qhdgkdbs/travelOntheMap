var express = require('express');
var router = express.Router();

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

router.get('/appcolumbus', function(req, res, next) {  
  res.render('app_columbus', { title: 'Express' })
});

router.get('/appmylist', function(req, res, next) {  
  res.render('app_mylist', { title: 'Express' })
});

router.get('/apprecomanded', function(req, res, next) {  
  res.render('app_recomanded', { title: 'Express' })
});

module.exports = router;
