var variable1 = 'Esta es una variable creada con VAR';
let variable2; // Undefined


// Testeo de Scope con Let
variable2 = 23;

let prueba;

if(true){
    prueba = 1;
}

if(true){
    prueba = 2;
}

// console.log(prueba);



const credencial = 123456789;

// Esto da un error de re-asignacion de una constante
// credencial = 987654321;  

let edad = 14;
let acompañadoPorAdulto = true; //booleano

// if (edad >= 18 || acompañadoPorAdulto == true) {
//     console.log('Puede pasar');
// } else {
//     console.log('Vuelva a los 18 por favor');
// }

if(edad >= 18){
    // console.log('Puede pasar');
}else if (acompañadoPorAdulto == true) {
    // console.log('Puede pasar con restricciones');
}else{
    // console.log('Vuelva a los 18');
}

let frutas = ['Frutilla', 'Manzana', 'Pera'];

// console.log(frutas.indexOf('Pera'));

// console.log(frutas.includes('Banana'));

// FUncion que tome 2 parametros, el primero una coleccion de frutas, el segundo una fruta y que devuela si tiene esa fruta o no

function hayFruta(arrayFrutas, fruta){
    // Opcion con indexOf

    // console.log(arrayFrutas.indexOf(fruta) != -1)
    
    // Opcion con includes
    console.log(arrayFrutas.includes(fruta));
}

// hayFruta(frutas, 'Manzana');


// Push

// Se inscribieron dos estudiantes nuevos y queremos agregarlos al final del array estudiantes.

let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ]

//   console.log(estudiantes);
  
  estudiantes.push(
      {
          nombre: 'Francisco',
          promedio: 8,
          curso: 'Big data'
        },
        {
            nombre: 'Mariana',
            promedio: 9,
            curso: 'Diseño UX' 
        }
        )
        
// console.log(estudiantes);
