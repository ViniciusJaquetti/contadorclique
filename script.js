// Seleciona o elemento que mostra o número
let numeroElemento = document.getElementById("numero");

// Inicializa o contador
let contador = 0;

// Função para incrementar
function incrementar() {
  contador++;
  numeroElemento.textContent = contador;
}

// Função para decrementar
function decrementar() {
  contador--;
  numeroElemento.textContent = contador;
}

// Função para zerar
function zerar() {
  contador = 0;
  numeroElemento.textContent = contador;
}
