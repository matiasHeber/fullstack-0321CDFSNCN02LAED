# RELACIONES
[Relaciones documentación oficial](https://sequelize.org/master/manual/assocs.html)


### Uno a uno
```
Movies.associate = function (models) {
        
    Movies.hasMany(models.Genres, {
        as: 'genre',
        foreignKey: 'genre_id'
    });

}
```
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
```
Movies.belongsToMany(models.Actors, {
    as: 'actors',
    through: 'actor_movie', //Tabla intermedia
    foreignKey: 'actor_id', //Primera clave de la tabla intermedia
    otherKey: 'movie_id', //Segunda clave de la tabla intermedia
})
```

### Implementación
- Traemos todas las relaciones
```
db.Movies.findAll({
    include:{all: true}
})
```
- Traemos la relación especificando el alias que queremos
```
db.Movies.findAll({
    include: [{
        association: 'genre'
    }]
})
```
- Traemos la relación especificando el alias que queremos
```
db.Movies.findAll({
    include: ['genre']
})
```

### Async await
- raw nos sirve para traer los datos de manera cruda (sin dataValues)
- Cuando queremos hacer mas de una promesa
```
all: async function (req, res) {
        let movie;
        let genre;
        try {
            movie = await db.Movies.findByPk(1, { raw:true });
            //console.log(movie);
            genre = await db.Genres.findByPk(movie.genre_id, { raw:true });
            //console.log(genre);
            
        } catch (e) {
            return res.send(e)
        }
        
        res.send(genre);
}
```
- Cuando solo queremos hacer una promesa
```
all: async function (req, res) {
    let movies;
    try {
        movies = await db.Movies.findAll();
    } catch (e) {
        return res.send(e)
    }
        
    res.send(movies);
}
```