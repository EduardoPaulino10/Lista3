// Pede uma nota até que ela esteja entre 0 e 10

prompt = require("prompt-sync")();

do {
  nota = parseFloat(prompt("Digite uma nota: "));
} while (nota < 0 || nota > 10);

console.log("Nota válida: " + nota);