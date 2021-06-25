const express = require('express');
const router = express.Router();
const controller = require('../controllers/moviesController');


router.get('/', controller.all);
router.get('/create', controller.create);
router.post('/', controller.store);

router.get('/delete/:id', controller.delete);
router.post('/delete/:id', controller.destroy);


module.exports = router;