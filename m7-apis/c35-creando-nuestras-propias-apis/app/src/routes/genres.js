const express = require('express');
const router = express.Router();
const controller = require('../controllers/genresController');

router.get('/', controller.list);
router.get('/detail/:id', controller.detail);


module.exports = router;