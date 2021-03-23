const funcionesDeTareas = require('./modulos/funcionesDeTareas');

let tareas = funcionesDeTareas.leerTarea();

const argumento = process.argv[2];


console.log(process.argv);

switch (argumento) {
    case 'listar':
        console.log('-------- LISTAR -------');
        // for (let i = 0; i < tareas.length; i++) {
        //     console.log('La tarea ' + tareas[i].titulo + ' se encuentra '+ tareas[i].estado );
        // }

        tareas.forEach(tarea => {
            console.log('La tarea ' + tarea.titulo + ' se encuentra '+ tarea.estado );
        });

        console.log('-------- LISTAR -------');
        break;

    case 'crear':
        let tareaNueva = {
            titulo: process.argv[3],
            estado: 'pendiente',
        };
        funcionesDeTareas.guardarTarea(tareaNueva);
        break

    case undefined:
        console.log('---------------');
        console.log('Atención - Tienes que pasar una acción.');
        console.log('---------------');
        break;
        
    default:
        console.log('---------------');
        console.log('No entiendo lo que quieres hacer.');
        console.log('---------------');
        break;
}