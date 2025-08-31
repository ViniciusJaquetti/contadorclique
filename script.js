let numero = 0;
const display = document.getElementById("numero");

function incrementar() {
  numero++;
  display.innerText = numero;
}

function decrementar() {
  numero--;
  display.innerText = numero;
}

function zerar() {
  numero = 0;
  display.innerText = numero;
}
