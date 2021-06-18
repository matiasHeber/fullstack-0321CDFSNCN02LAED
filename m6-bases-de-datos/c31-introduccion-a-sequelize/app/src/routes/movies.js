const express = require('express');
const router = express.Router();
const controller = require('../controllers/moviesController');


router.get('/', controller.all);


module.exports = router;