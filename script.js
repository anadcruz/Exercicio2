var linkHora = document.getElementById("link");
var hora = document.getElementById("hora");

linkHora.onmouseover = mostrarHora;
linkHora.onclick = mostrarAlerta;

function mostrarHora() {
    hora.textContent = "Hora atual: " + new Date().toLocaleTimeString();
}

function mostrarAlerta() {
    alert("O link foi clicado!");
}
