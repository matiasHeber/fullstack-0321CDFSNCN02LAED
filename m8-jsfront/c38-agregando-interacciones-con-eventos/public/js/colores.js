//window.onload = function(){
//}
window.addEventListener('load', function(){
    let colorActual;

    let red = document.querySelector('#red');
    red.addEventListener('click', seleccionarColor);

    let blue = document.querySelector('#blue');
    blue.addEventListener('click', seleccionarColor);

    let yellow = document.querySelector('#yellow');
    yellow.addEventListener('click', seleccionarColor);

    let green = document.querySelector('#green');
    green.addEventListener('click', seleccionarColor);



    let caja1 = document.getElementById('caja1');
    caja1.addEventListener('click', aplicarColor)

    let caja2 = document.getElementById('caja2');
    caja2.addEventListener('click', aplicarColor)

    let caja3 = document.getElementById('caja3');
    caja3.addEventListener('click', aplicarColor)

    //Funciones utilizadas en este código
    function seleccionarColor(){
        colorActual = this.id;
    }

    function aplicarColor(){
        this.style.backgroundColor = colorActual; 
    }




})