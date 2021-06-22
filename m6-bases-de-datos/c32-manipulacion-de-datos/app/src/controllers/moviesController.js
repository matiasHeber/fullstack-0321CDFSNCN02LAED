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
        //res.render('view');
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

    },
    destroy: (req, res) => {

    }

}