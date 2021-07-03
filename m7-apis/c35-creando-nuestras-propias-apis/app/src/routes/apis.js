const express = require('express');
const router = express.Router();
const controller = require('../controllers/moviesController');


/*API REST*/
router.post('/movies', controller.guardar);// -> Crea una pelicula
router.get('/movies', controller.todos);// -> Obetenemos todas las peliculas
router.get('/movies/:id', controller.detalle);// -> Obtenemos una pelicula
router.put('/movies/:id', controller.actualizar);// -> Obtenemos una pelicula



module.exports = router;