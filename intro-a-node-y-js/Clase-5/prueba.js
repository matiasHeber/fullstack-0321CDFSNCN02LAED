const fs = require('fs');

let listaTareas = fs.readFileSync('tareas.json', 'utf-8');

listaTareas = JSON.parse(listaTareas);


const argumento = process.argv[2];

// console.log(process.argv.slice(2));


switch (argumento) {
    case 'listar':
        console.log(listaTareas);
        break;
    case undefined:
        console.log('---------------------');
        console.log('Tenes que poner una accion');
        console.log('---------------------');
        break;
    default:
        console.log('----------------');
        console.log('No entiendo que es lo que queres hacer');
        console.log('----------------');
        break;
} 