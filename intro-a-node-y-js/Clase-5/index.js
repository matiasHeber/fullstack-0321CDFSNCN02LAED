let objeto = {};


let array = [245,12,33,47];

array.length; //propiedad del objeto array

array.push(5); // si una propiedad se ejecuta como una funcion es un método


let auto = {
    marca: 'Volkswagen',
    modelo: 'Golf',
    anio: '2020',
    encender:  () => {
        console.log(auto.modelo + ' hace brrrruuum al encender');
        // Si el metodo es con funcion flecha (arrow) no tiene acceso a la palabra reservada this
    },
    encender2: function () {
        console.log(this.modelo + ' hace brrrruuum al encender');
    },

} 

function name(params) {
    
}

// funcion flecha anonima
(params) => {

}

// funcion flecha expresada sin cuerpo
let funcionFlecha = (params) => console.log(params);


// if tradicional
let edad = 18;

if (edad >= 18) {
    console.log('Es mayor');
}else{
    console.log('Es menor');
}

// If ternario
edad >= 18 ? console.log('Es mayor') : console.log('Es menor');


// switch

switch (edad) {
    case 18:
        console.log('Es mayor y puede pasar');
        break;
    case 10:
        console.log('Tiene 10 años y no puede pasar');
        break;
    default:
        break;
}


// recorriendo un array con for
for(let i = 0; i < array.length ; i++){
    console.log(array[i]);
}



