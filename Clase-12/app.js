const express = require('express');
const path = require('path');
const app = express();


app.get('/', function(req,res){
    res.sendFile(path.resolve(__dirname,'./views/index.html'));
})

const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));




app.listen(3001, () => console.log('Servidor corriendo el puerto 3001'));