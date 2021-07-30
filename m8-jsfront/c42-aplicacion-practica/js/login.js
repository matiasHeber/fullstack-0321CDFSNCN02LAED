let input = document.querySelector('#inputPass');
let span = document.querySelector('#showPass');

span.addEventListener('click', () => {
    // 1. Identificar el valor del atributo type
    // 2. Si esta en 'password' valor, lo cambiamos a 'text' valor
    // 3. Si el ojito está tachado, lo destachamos
    // 4. Si esta en 'text' valor, lo cambiamos a 'password' valor
    // 5. Si el ojito está tachado, lo destachamos
    if(input.type === 'password') {
        span.classList.remove('fa-eye-slash');
        span.classList.add('fa-eye');
        input.type = 'text';
    } else {
        span.classList.remove('fa-eye');
        span.classList.add('fa-eye-slash');
        input.type = 'password';
    }
});