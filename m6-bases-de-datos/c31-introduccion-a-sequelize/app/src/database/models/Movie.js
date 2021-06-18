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
        timestamps: false,
        underscored: true,
    }

    const Movies = sequelize.define(alias, cols, config);
    
    return Movies;
}