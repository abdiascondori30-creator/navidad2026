function agregarRegalo() {
    var campo = document.getElementById("campo");
    var lista = document.getElementById("lista-regalos");
    var elemento = document.createElement("li");
    elemento.textContent = campo.value;
    lista.appendChild(elemento);
    campo.value = "";
}
function limpiarRegalos() {
    var lista = document.getElementById("lista-regalos");
    lista.innerHTML = "";
}