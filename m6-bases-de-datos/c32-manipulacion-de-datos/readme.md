# Manipulación de datos
- En esta clase se podrá ver los metodos que se centran en hacer un CRUD con sequelize
## Create y bulkCreate
- Cuando nuestro metodo no devuelve nada, podemos pasar por alto el then (no es recomendable)
- No es necesario completar todos los datos a menos que la base de datos nos diga que no puden ser nulos
```
db.Movies.create({
    title: 'Pepito y la fabrica de chocolate'
})
res.redirect('/movies');
```
- Si queremos mantener la integridad de nuestra db, este metodo nos sirve para no crear dos registros iguales
```
db.Movies.bulkCreate({
    title: 'Pepito y la fabrica de chocolate'
})
res.redirect('/movies');
```
## Update
```
- Actualizamos un registro parcialmente
db.Movies.update({
    title: 'Pepito en la fabrica de milanesas'   
},{
    where:{
        id: 27
    }
})
res.redirect('/movies');
```
- Con el upsert evitamos enviar varias veces la misma actualización a la base de datos
```
db.Movies.upsert({
    title: 'Pepito en la fabrica de milanesas'   
},{
    where:{
        id: 27
    }
})
res.redirect('/movies');
```
## Destroy y soft deletes
- Borramos un registro definitivamente
```
db.Movies.destroy({ 
    where: {
        id: req.params.id
    }
})
.then(dato => {
    console.log(dato); //es 0 o 1 dependiendo si se borró o no pudo hacerlo
})
.catch(e => {
    return res.send(e)
})
res.redirect('/movies')
```
- Para hacer borrado lógico tenemos que tener algunas cosas en cuenta
1. Agregar el campo **deleted_at** en la tabla que querramos que no se borre definitivamente
2. Agregar y setear con **_true_** las propiedades **timestamps y paranoid** en la configuración del modelo que corresponda
```
const config = {
    tableName: 'movies',
    timestamps: true,
    underscored: true,
    paranoid: true
}
``` 
- De esta forma cada dato que borremos no aparecerá en las consultas a la db
- Se mantendrá también un registro de los datos que borramos