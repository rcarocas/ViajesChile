//activar tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$(function () {
    //popup mensaje enviado
    $("#enviarCorreo").on("click", function (event) {
        alert("Muchas gracias, hemos recibido tu mensaje")
    });
})