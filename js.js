//Variables
const id = document.querySelector('.card-id');
const text = document.querySelector ('.card-text');
const btn= document.querySelector ('.dice-img');
//Eventos

document.addEventListener('DOMContentLoaded', () => {
    generate();
})

btn.addEventListener('click', () => {
    generate();
})

//Funciones

function getAdvice(done) {
    const result = fetch('https://api.adviceslip.com/advice');
    result.then(response => response.json()).then(data=>{done(data)})

}

function generate() {
    getAdvice(data=>{
        id.textContent = data.slip.id;
        text.textContent = `"${data.slip.advice}"`;
    })
}