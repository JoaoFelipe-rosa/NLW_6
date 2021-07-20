import Modal from './modal.js'

const modal = Modal()

//pegar todos os botões que existem com a classe check
const checkButtons = document.querySelectorAll(".action a.check")

checkButtons.forEach(button => {
    //adicionar escuta
    button.addEventListener("click", event => {
        //abrir modal
        modal.open()
    })
})

console.log("main")