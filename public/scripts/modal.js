export default function Modal() {
    function open() {
        document.querySelector(".modal-wrapper").classList.add("active")

    }

    function close() {

    }
    return {
        open,
        close
    }

}

console.log('modal')