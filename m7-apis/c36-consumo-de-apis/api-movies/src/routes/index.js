var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status('200').json({
    basename: 'localhost:3000/api',
    endpoints: ['/movies'],
    request: {
      title: 'string'
    },
    response: {
      id: '1',
      title: "john doe",
      updatedAt: "2021-07-06T20:43:11.603Z",
      createdAt: "2021-07-06T20:43:11.603Z"
    }
  })
});

module.exports = router;
