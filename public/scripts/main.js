import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector(".modal h2")
const modalDescripition = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal button")
//pegar todos os botões que existem com a classe check
const checkButtons = document.querySelectorAll(".action a.check")

checkButtons.forEach(button => {
    //adicionar escuta
    button.addEventListener("click", handleClick)
})

const deleteButton = document.querySelectorAll(".action a.delete")

deleteButton.forEach(button => {
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true) {
    event.preventDefault()

    const text = check ? "Marcar como lida" : "Excluir"

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/room/:room/:question/:action`)

    modalTitle.innerHTML = `${text} esta pergunta?`
    modalDescripition.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")


    modal.open()
}



console.log("MAIN RUNNING")