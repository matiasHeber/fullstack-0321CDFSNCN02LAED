window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE PELÍCULAS------------------//    
let form = document.querySelector('.form');


//console.log(form);
form.title.focus();

form.addEventListener('submit', function(e){
    let errores = [];
    //Capturar los input del formulario
    let title = document.querySelector('#title');
    let rating = document.querySelector('#rating');
    let errorTitulo = document.querySelector('#errorTitulo');
    
    //Validaciones
    if(title.value == ''){
        errores.push('El campo titulo no puede estar vacio');
        
        errorTitulo.classList.add('alert-warning');
        errorTitulo.innerHTML = 'El campo titulo no puede estar vacio'
        title.classList.add('is-invalid');
    }else{
        title.classList.remove('is-invalid');
        title.classList.add('is-valid');

        form.rating.focus();
    }



    //Determinar si hay o no errores - Mostrarlos al usuario
    if(errores.length >0){
        e.preventDefault();
        let mensajesErrores = document.querySelector('.errores');
        mensajesErrores.innerHTML = "";
        mensajesErrores.classList.add('alert-warning');
                
        for(let i = 0; i < errores.length; i++){
            mensajesErrores.innerHTML += `<li > ${errores[i]} </li>`;
        }
    }else{
        alert('Validación exitosa!!!');
        form.submit();
    }






})





}