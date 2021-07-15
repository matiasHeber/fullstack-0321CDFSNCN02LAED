var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Digital Movies' });
});

router.get('/colores', (req,res) =>{
  res.render('colores');
})

module.exports = router;
