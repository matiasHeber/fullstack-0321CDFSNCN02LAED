### Intro a API's
- Backend prestado o propio
- Sistema de comunicación entre aplicaciones
- Endpoint
    - Las URI's disponibles dentro de mi API
- Tipos de API's (publicas, semipublicas, privadas)
    - Publicas
        1. [Rick y Morti](https://rickandmortyapi.com/)
        2. [Más](https://github.com/public-apis/public-apis)
        3. [API's de argentina](https://www.argentina.gob.ar/onti/software-publico/catalogo/apis)
    - Semipublicas
        1. [giphy](https://developers.giphy.com/)
        2. [MercadoPago](https://www.mercadopago.com.ar/developers/es/guides/online-payments/checkout-pro/test-integration)
    - Privadas 
        1. [Maps](https://developers.google.com/maps?hl=es)
- Recursos
### REST
- HTTP (Metodos y estados)
    - POST -> Crea un recurso 
    - GET -> Obtiene un recurso
    - PUT -> Reemplaza un recurso
    - PATCH -> Reemplaza parcialmente un recurso
    - DELETE -> Borra un recurso
- Stateless (Sin estado)
- Cacheable (Datos cacheados)
- Formatos del envio de datos
    - JSON
    - TEXT
    - RAW
    - XML
    - HTML
    - URLencoded
### Creación de API's propias
- Debemos devolver los datos en json, para eso podemos usar el metodo **json** de **res**
- Debemos devolver el status http correspondiente
- Un ejemplo de respuesta en node.js con sequelize es:
```
db.Movies.findAll()
    .then(movies => {
        return res.status(200).json(movies); // Acá podemos ver que los datos se envian en json y con el status http
    })
    .catch(e =>{
        return res.status(501).json(e); // Acá podemos ver que los datos se envian en json y con el status http
    })
```