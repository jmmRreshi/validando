const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const btnEnviar = document.getElementById("enviar");
const resetBtn = document.getElementById("resetBtn");

eventListener();

function eventListener() {
    document.addEventListener("DOMContentLoaded", inicioApp);

    email.addEventListener("blur", validarCampo);
    asunto.addEventListener("blur", validarCampo);
    mensaje.addEventListener("blur", validarCampo);

    btnEnviar.addEventListener("click", enviarEmail);
    resetBtn.addEventListener("click", resetFormulario);
}


function inicioApp() {
    btnEnviar.disabled = true;
}

function validarCampo() {
    validarLongitud(this);

    if (this.type === "email") {
        validarEmail(this);
    }

    let errores = document.querySelectorAll(".error");

    if (email.value !== "" && asunto.value !== "" && mensaje.value !== "") {
        if (errores.length === 0) {
            btnEnviar.disabled = false;
        }
    }
}

function resetFormulario(e) {
    formlarioEnviado.reset();
    e.preventDefault();
}

function validarLongitud(campo) {
    if (campo.value.length > 0) {
        campo.style.borderBottomColor = "green";
        campo.classList.remove("error");
    } else {
        campo.style.borderBottomColor = "red";
        campo.classList.add("error");
    }
}

function enviarEmail(e) {
    const spinnersGif = document.querySelector("#spinner");
    spinnersGif.style.display = "block";

    const enviando = document.createElement("img");
    enviando.src = "img/mail.gif";
    enviando.style.display = "block";

    setTimeout(function() {
        spinnersGif.style.display = "none";

        document.querySelector("#loaders").appendChild(enviando);

        setTimeout(function() {
            enviando.remove();
            btnEnviar.requestFullscreen();
        }, 5000);
    }, 3000);

    e.preventDefault();
}

function validarEmail(campo) {
    const mensaje = campo.value;
    if (mensaje.indexOf("@") !== -1) {
        campo.style.borderBottomColor = "green";
        campo.classList.remove("error");
    } else {
        campo.style.borderBottomColor = "red";
        campo.classList.add("error");
    }
}