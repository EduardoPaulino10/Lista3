// Pergunta se deseja continuar

prompt = require("prompt-sync")();

do {
  resposta = prompt("Deseja continuar? (S/N): ");
} while (resposta == "S" || resposta == "s");

console.log("Programa encerrado");