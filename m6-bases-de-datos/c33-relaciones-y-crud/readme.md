# RELACIONES
[Relaciones documentación oficial](https://sequelize.org/master/manual/assocs.html)


### Uno a uno

### Uno a muchos
- Del lado de genres
```
Genres.associate = function (models) {
        
    Genres.hasMany(models.Movies, {
        as: 'movies',
        foreignKey: 'genre_id'
    });

}
```
- Del lado de movies
```
Movies.associate = function (models) {
        
        Movies.belongsTo(models.Genres, {
            as: 'genre',
            foreignKey: 'genre_id'
        })

    }
```
### Muchos a muchos


### Implementación
```
db.Movies.findAll({
    include:{all: true}
})
```
```
db.Movies.findAll({
    include: [{
        association: 'genre'
    }]
})
```
```
db.Movies.findAll({
    include: ['genre']
})
```