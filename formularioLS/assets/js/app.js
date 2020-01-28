const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("enviar");

eventListener();

function eventListener() {
    document.addEventListener("DOMContentLoaded", inicioApp);

    email.addEventListener("blur", validarCampo);
}


function inicioApp() {
    btnEnviar.disabled = true;
}

function validarCampo() {
    console.log("dentro del imput");
}