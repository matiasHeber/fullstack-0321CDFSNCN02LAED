const express = require('express');
const router = express.Router();
const controller = require('../controllers/moviesController');


/*API REST*/
router.get('/movies', controller.index);// -> Obetenemos todas las peliculas
router.post('/movies', controller.store);// -> Crea una pelicula
router.get('/movies/:id', controller.show);// -> Obtenemos una pelicula
router.put('/movies/:id', controller.update);// -> Actualizamos una pelicula
router.delete('/movies/:id', controller.update);// -> Obtenemos una pelicula

module.exports = router;