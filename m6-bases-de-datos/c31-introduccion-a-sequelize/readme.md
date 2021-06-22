# Introducción a Sequelize

## Instalación de paquetes
- [sequelize](https://sequelize.org/)
> ```npm i sequelize```
- [mysql2](https://www.npmjs.com/package/mysql2)
> ```npm i mysql2```
- [sequelize-cli](https://www.npmjs.com/package/sequelize-cli)
> ```npm i -g sequelize-cli```

## Configuración del entorno
- Archivo .sequelizerc
```
const path = require('path')
 
module.exports = {
    'config': path.resolve('./database/config', 'config.js'),
    'models-path': path.resolve('./database/models'),
    'seeders-path': path.resolve('./database/seeders'),
    'migrations-path': path.resolve('./database/migrations'),
}
```
_No nos olvidemos de poner en el archivo **config.js** el **module.exports**. Debería quedar de la siguiente forma:_
```
module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
## Vamos a crear nuestro primer model
_Antes que nada tenemos que tener en cuenta que hay **dos** formas de crear un modelo **(Funcional y de clase)**_
- **Nosotros vamos a estar trabajando en la funcional**
- Todos los modelos se crean en la carpeta models, ya que ahí se encuentra el archivo que configura nuestros modelos
- El nombre del archivo que creemos debe ser en **singular** y con la primer letra en **mayuscula**

### Empecemos con crear la funcion que vamos a exportar
```
module.exports = (sequelize, DataTypes) => {
    //Toda la logica del modelo
}
```
### Vamos a definir el nombre de nuestro modelo (alias)
- Este nombre es para identificar el modelo dentro de nuestra aplicación
```
const alias = 'Usuario';
```

### Ahora vamos a decirle al modelo que columnas tiene la db
- _Recordemos que estamos trabajando dentro de la función que se exporta_
- Podemos ayudarnos de la documentación de [sequelize](https://sequelize.org/master/manual/model-basics.html)
- Todas las columnas tienen que coincidir con las columnas de la db
```
const cols = {
        id: {
            type: DataTypes.INTEGER, //Tipo de dato de la col
            primaryKey: true, // Si es pk
            allowNull: false, // Si puede ser nulo
            autoIncrement: true //Si es autoincremental
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,            
        }
    }
```

### Agreguemos las configuraciones de nuestro modelo
- Estas configuración son teniendo en cuenta la db
```
    const config = {
        tableName: 'users', // Nombre de la tabla
        timestamps: false, // Admite timestamps
        paranoid: false, // Admite borrado lógico
        underscored: false, // La db fue pensada con guiones bajos
        charset: 'utf8', // Tipo de encoding
        dialectOptions: {
            collate: 'utf8mb4_unicode_ci' // Tipo de colación
        }
    }
```

### Por último vamos a definir el model
- El orden de los parametros es obligatorio
```
    const Usuario = sequelize.define(alias, cols, config);
    return Usuario;
```

## Ahora el controller (metodos y operadores)
- Hay que tener en cuenta que debemos requerir la carpeta models y no los archivos
- Todos los metodos son promesas y las promesas son asincronicas

### FindAll
```
const db = require('../database/models')

const controller= {
    all: (req, res) => {
        db.Usuario.findAll()
            .then(usuarios => res.send(usuarios))
            .catch(e => res.send(e))
    }
}
```

### Where 
- Hay que tener en cuenta la "S" de sequelize a la hora de traer los **Operadores**
```
const db = require('../database/models')
const Op = db.Sequelize.Op; 

const controller= {
    all: (req, res) => {
        db.Usuario.findAll({
            where: {
                name: {[Op.like]: '%a'}
            }
        })
        .then(users => res.send(users))
    }
}

```

### Order, Limit y Ofset 
- Hay que tener en cuenta la "S" de sequelize a la hora de traer los **Operadores**
```
const db = require('../database/models')
const Op = db.Sequelize.Op; 

const controller= {
    all: (req, res) => {
        db.Usuario.findAll({
            where: {
                name: {[Op.like]: '%a'}
            },
            order: [['name': 'ASC']],
            limit: 10,
            ofset: 2
        })
        .then(users => res.send(users))
    }
}

```
