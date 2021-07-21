window.onload = () => {
    /* Una forma de acceder al form */
    //let form = document.querySelector('.formulario');
    //console.log(form.elements['title'].value = 'una peli');
    
    // capturar el form
    let form = document.querySelector('.formulario');

    // hacer un fetch a cualquier pelicula
    fetch('http://localhost:3031/api/movies/1')
        .then(res => res.json())
        .then(function (pelicula) {
            // Empezar a cargar los datos del fetch a los inputs del form
            form.elements['title'].value = pelicula.data.title;
            form.elements['rating'].value = parseInt(pelicula.data.rating);
            form.elements['awards'].value = parseInt(pelicula.data.awards);
            form.elements['release_date'].value = pelicula.data.release_date.slice(0, 10);
            form.elements['largo'].value = pelicula.data.length;
        })
    

    // let settings = {
    //     method: 'POST',
    //     headers:{
    //         'Content-Type':'aplication/json',
    //     },
    //     body: JSON.stringify({title: 'Hola jsfront'})
    // }

    // fetch('http://localhost:3031/api/movies', settings)


}