let dividir = require('./funcionesCalculadora/dividir');
let multiplicar = require('./funcionesCalculadora/multiplicar');
let restar = require('./funcionesCalculadora/restar');
let sumar = require('./funcionesCalculadora/sumar');


function calculadora(num1, num2, operacion) {
    return operacion(num1, num2)
};
// console.log(calculadora(4,7,     multiplicar    ));


function saludar(nombre, apellido, callback) {
    return 'Bienvenido ' +  callback(nombre, apellido)
}

function iniciales(nombre, apellido) {
    return nombre[0] + ' ' + apellido[0]
}

function nombreEInicial(nombre, apellido) {
    return nombre + ' ' + apellido[0]
}

console.log(saludar('Francisco', 'Gomez', iniciales));


console.log(saludar('Francisco', 'Gomez', nombreEInicial));


/*
Vamos a ejecutar una función que recibimos por parámetro a cada uno de los elementos de un array. 

Para esto debemos completar la función procesar. Esta recibe dos parámetros:

1. El primer parámetro es un array.

2. El segundo parámetro que recibe es una función (al que solemos llamar callback).

La función deberá retornar un array donde cada elemento es el resultado de aplicar la función pasada a un elemento del array pasado.

*/

function agregarHTTP(url) {
    return 'https://' + url
}


// Esta funcion se encarga de recibir un array y ejecutar un metodo devolviendo como resultado otro array
function procesar(array, callback) {
    let resultado = [];

    // Resolucion con forEach ->
    // array.forEach(element => {
        //    resultado.push(callback(element))
        // });
        
    // Resolucion con for ->
    for (let i = 0; i < array.length; i++) {
        resultado.push(callback(array[i]))
    }
    return resultado
}

console.log(procesar(['www.google.com.ar', 'www.instagram.com.ar'], agregarHTTP))



// APROBADOS / DESAPROBADOS
let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter((estudiante)=>{
    return estudiante.aprobado;
})

console.log(aprobados)

let desaprobados = estudiantes.filter((estudiante)=>{
    return !estudiante.aprobado;
    // return estudiante.aprobado != true;
    // return !estudiante.aprobado == false;
})

console.log(desaprobados);