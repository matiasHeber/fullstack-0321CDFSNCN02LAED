const db = require('../database/models');
const Op = db.Sequelize.Op;


module.exports = {
    index: async function (req, res) {
        let movies;
        try {
            movies = await db.Movies.findAll()
            return res.status(200).json({
                meta: {
                    status : 200,
                    total: movies.length,
                    url: 'api/movies'
                },
                data: movies
            });
        }catch(e) {
            return res.status(501);
        }
    },
    store: (req, res) => {
        db.Movies.create({
            ...req.body
        })
        .then(created => {
            return res.status(200).json(created);
        })
        .catch(e =>{
            return res.status(501).json(e);
        })
        
    },
    update: (req, res) => {
        db.Movies.upsert({
            ...req.body
        },{
            where:{
                id: 27
            }
        })
        .then(created => {
            return res.status(200).json(created);
        })
        .catch(e =>{
            return res.status(501).json(e);
        })
    },
    show: async (req, res) => {
        let movie;
        try {
            movie = db.Movies.findByPk(req.params.id)
        }catch(e) {
            return res.status(501).json(e);
        }

        return res.status(200).json(movie);
        
    },
    destroy: (req, res) => {
        db.Movies.destroy({ 
            where: {
                id: req.params.id
            }
        })
        .then(dato => {
            console.log(dato);
        })
        .catch(e => {
            return res.send(e)
        })
        res.redirect('/movies')
    },
    guardar: (req, res) => {

    },
    actualizar: (req, res) => {
        
    },
    detalle: async (req, res) => {
        let movie;
        try {
            movie = await db.Movies.findByPk(req.params.id);
        }catch(e) {
            return res.status(501).json(e);
        }

        if (movies) {
            return res.status(200).json(movie);
        }
    },
    todos: (req, res) => {
        db.Movies.findAll()
            .then(movies => {
                return res.status(200).json(movies);
            })
            .catch(e =>{
                return res.status(501).json(e);
            })
    }

}