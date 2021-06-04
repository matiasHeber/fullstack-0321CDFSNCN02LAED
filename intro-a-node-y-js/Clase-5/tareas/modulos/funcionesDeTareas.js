const fs = require('fs');

function leerTarea() {
    let tareas = fs.readFileSync('tareas.json');
    tareas = JSON.parse(tareas);

    return tareas;
}

function escribirJSON(array) {
    let json = JSON.stringify(array);
    fs.writeFileSync('tareas.json', json);
}


function guardarTarea(objetoTarea) {
    let arrayTareas = leerTarea();
    arrayTareas.push(objetoTarea);
    escribirJSON(arrayTareas);
}

module.exports = {leerTarea, escribirJSON, guardarTarea};