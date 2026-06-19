// Exibe um menu até o usuário escolher sair

prompt = require("prompt-sync")();

opcao = 0;

do {
  console.log("1 - Ver saldo");
  console.log("2 - Fazer depósito");
  console.log("3 - Sair");

  opcao = parseInt(prompt("Escolha uma opção: "));

  if (opcao == 1) {
    console.log("Saldo: R$100");
  }

  if (opcao == 2) {
    console.log("Depósito realizado");
  }
} while (opcao != 3);

console.log("Programa encerrado");