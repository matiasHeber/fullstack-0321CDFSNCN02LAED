// MODULO PROPIO
let calculadora = require(__dirname + '/calculadora');
// MODULO DE TERCEROS
let movieQuotes = require('popular-movie-quotes');
// MODULO NATIVO
let fs = require('fs');

/*
USO DEL MODULO PROPIO (CALCULADORA)
console.log('--------  Multiplicar ')
console.log(calculadora.multiplicar(4,5));
console.log('--------  Dividir')
console.log(calculadora.dividir(16,4));
console.log('--------  Restar')
console.log(calculadora.restar(10,2));
console.log('--------  Sumar')
console.log(calculadora.sumar(10,2));
*/

// USO DEL MODULO DE TERCEROS (MOVIE)
console.log(movieQuotes.getSomeRandom(10));


// USO DEL MODULO NATIVO (FS)

// console.log(fs.readFileSync('prueba.txt', 'utf-8'));
