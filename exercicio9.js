// Calcula a média dos números digitados

prompt = require("prompt-sync")();

soma = 0;
quantidade = 0;

do {
  numero = parseFloat(prompt("Digite um número positivo: "));

  soma = soma + numero;
  quantidade = quantidade + 1;

  resposta = prompt("Deseja inserir outro número? (S/N): ");
} while (resposta == "S" || resposta == "s");

media = soma / quantidade;

console.log("Média: " + media);