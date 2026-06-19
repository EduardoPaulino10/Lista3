// Soma números até o usuário digitar 0

prompt = require("prompt-sync")();

soma = 0;

numero = parseInt(prompt("Digite um número (0 para parar): "));

while (numero != 0) {
  soma = soma + numero;

  numero = parseInt(prompt("Digite outro número (0 para parar): "));
}

console.log("Total da soma: " + soma);