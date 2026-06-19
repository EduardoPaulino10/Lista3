// Calcula o fatorial de um número

prompt = require("prompt-sync")();

num = parseInt(prompt("Digite um número: "));

fatorial = 1;

for (i = 1; i <= num; i++) {
  fatorial = fatorial * i;
}

console.log("Fatorial: " + fatorial);