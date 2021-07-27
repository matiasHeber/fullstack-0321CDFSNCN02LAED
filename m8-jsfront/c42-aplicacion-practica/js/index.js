const qs = (x) => document.querySelector(x);
const qsa = (x) => document.querySelectorAll(x);
let cart = JSON.parse(localStorage.getItem('cart')) || [];

fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(characters => {

        qs('.spinner').classList.add('hide');

        characters.results.forEach(character => {
            qs('main').innerHTML += `
                <div class="card col-3">
                    <img src="${character.image}" class="card-img-top pt-3" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${character.name}</h5>
                        <a href="#" class="btn btn-primary" id="addToCart">Añadir al carrito</a>
                    </div>
                </div>
            `;
        });

    let buttons = qsa('#addToCart');
    for(let i = 0; i < buttons.length; i++){

        buttons[i].addEventListener('click', (e) => {
            e.preventDefault();
            cart.push({
                id: characters.results[i].id, 
                name: characters.results[i].name,
                cuantity: 2
            })

            localStorage.setItem('carrito', JSON.stringify(cart));
            qs('.fa-shopping-cart').innerText = cart.length
            // qs('.fa-shopping-cart').innerText = JSON.parse(localStorage.getItem('cart')).length
        })
    }

    })
    .catch(e => console.log(e))