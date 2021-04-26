const express = require('express');
const app = express();
const path = require('path');


/*Configuraciones*/
app.use(express.static(path.resolve(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/index.html'));
});
app.get('/lovelace', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/lovelace.html'));
});
app.get('/turing', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/turing.html'));
});
app.get('/berners-lee', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/berners-lee.html'));
});
app.get('/babbage', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/babbage.html'));
});
app.get('/clarke', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/clarke.html'));
});
app.get('/hamilton', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/hamilton.html'));
});
app.get('/hopper', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'views/hopper.html'));
});

app.listen(3030, () => console.log('Servidor corriendo en el puerto 3030\nhttp://localhost:3030'));