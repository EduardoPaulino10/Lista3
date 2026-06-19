// Pede a senha até o usuário acertar

prompt = require("prompt-sync")();

senha = prompt("Digite a senha: ");

while (senha != "1234") {
  senha = prompt("Senha incorreta. Digite novamente: ");
}

console.log("Acesso permitido");