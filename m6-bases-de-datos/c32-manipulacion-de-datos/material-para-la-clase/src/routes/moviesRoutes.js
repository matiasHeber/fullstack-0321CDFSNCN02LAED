const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.list);
router.get('/movies/new', moviesController.new);
router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/detail/:id', moviesController.detail);


//Rutas exigidas para la creación del CRUD
router.???('', moviesController.add);
router.???('', moviesController.create);
router.???('', moviesController.edit);
router.???('', moviesController.update);
router.???('', moviesController.delete);
router.???('', moviesController.destroy);

module.exports = router;