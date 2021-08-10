/**
 * -- Persona --
 * nombre
 * apellido
 * dni
 */

class Persona {
    constructor (nombre, apellido, dni) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }
    caminar () {
        console.log('Estoy caminando');
    }
}


class Profesor extends Persona {
    constructor (nombre, apellido, dni, comision, aula) {
        super(nombre, apellido, dni);
        this.comision = comision;
        this.aula = aula;
    }
}

class Alumno extends Persona {
    constructor (nombre, apellido, dni, comision, aula, profesor) {
        super(nombre, apellido, dni);
        this.comision = comision;
        this.aula = aula;
        this.profesor = profesor
    }
}


let valen = new Alumno ('valen', 'coulomme', 41231230, 'cn02');
console.log(valen);
valen.caminar();

let sebi = new Profesor ('sebi', 'rellihan', 41231230);
console.log(sebi);