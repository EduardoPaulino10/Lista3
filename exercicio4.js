// Faz uma contagem regressiva até zero

prompt = require("prompt-sync")();

numero = parseInt(prompt("Digite um número positivo: "));

while (numero >= 0) {
  console.log(numero);
  numero = numero - 1;
}