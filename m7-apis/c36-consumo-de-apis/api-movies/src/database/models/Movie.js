module.exports = (sequelize, DataTypes) => {
    const alias = 'Movies';

    const cols = {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            //field: 'title'
        }
    }

    const config = {
        tableName: 'movies',
        timestamps: true,
        underscored: true,
        paranoid: true
    }

    const Movies = sequelize.define(alias, cols, config);

    Movies.associate = function (models) {
        
        Movies.belongsTo(models.Genres, {
            as: 'genre',
            foreignKey: 'genre_id'
        })

        Movies.belongsToMany(models.Actors, {
            as: 'actors',
            through: 'actor_movie',
            foreignKey: 'actor_id',
            otherKey: 'movie_id',
        })

    }

    return Movies;
}