// toggle

const { text } = require("body-parser")

const toggleDescription = document.querySelector('.titulo-descripcion')



const textDescription = document.querySelector('.text-descripcion')

toggleDescription.addEventListener('click', () => {
    textDescription.classList.toggle('hidden');
});