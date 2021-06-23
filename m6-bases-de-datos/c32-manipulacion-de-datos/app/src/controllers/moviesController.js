const db = require('../database/models');
const Op = db.Sequelize.Op;


module.exports = {
    all: (req, res) => {
        db.Movies.findAll()
            .then(movies => res.send(movies))
            .catch(e => res.send(e))
    },
    create: (req, res) => {
        res.render('moviesAdd');
    },
    edit: (req, res) => {
        res.render('moviesEdit');
    },
    delete: (req, res) => {
        //res.render('view');
    },
    store: (req, res) => {
        db.Movies.create({
            title: 'Pepito y la fabrica de chocolate'
        })
        res.redirect('/movies');
    },
    update: (req, res) => {
        db.Movies.update({
            title: 'Pepito en la fabrica de milanesas'   
        },{
            where:{
                id: 27
            }
        })
        res.redirect('/movies');
    },
    delete: (req, res) => {
        db.Movies.findByPk(req.params.id)
            .then(Movie => res.render('moviesDelete', {Movie}))
            .catch(e => res.send(e));
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
    }

}