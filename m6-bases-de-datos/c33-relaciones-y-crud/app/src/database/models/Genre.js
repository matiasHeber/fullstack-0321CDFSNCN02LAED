module.exports = (sequelize, DataTypes) => {
    const alias = 'Genres';

    const cols = {
        id: {
            type: DataTypes.INTEGER(10),
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }

    const config = {
        tableName: 'genres',
        timestamps: true,
        underscored: true,
        paranoid: false
    }

    const Genres = sequelize.define(alias, cols, config);

    Genres.associate = function (models) {
        
        Genres.hasMany(models.Movies, {
            as: 'movies',
            foreignKey: 'genre_id'
        });

    }
    
    return Genres;
}