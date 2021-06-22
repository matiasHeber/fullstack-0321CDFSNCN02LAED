const db = require('../database/models');
const Op = db.Sequelize.Op;


module.exports = {
    all: (req, res) => {
        db.Movies.findAll({
            where: {
                title: {
                    [Op.like]: 'Harry Potter%'
                }
            }
        })
            .then(movies => res.send(movies))
            .catch(e => res.send(e))
    }
}