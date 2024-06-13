/*
Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado.
*/

const prompt = require("prompt-sync")();
const numeroCorreto = Math.floor(Math.random() * 5);
let chute;

do {
  chute = parseInt(prompt("Adivinhe o número sorteado entre 1 e 5: "));
  if (chute < numeroCorreto) {
    console.log("Tente um número maior");
  } else if (chute > numeroCorreto) {
    console.log("Tente um número menor");
  }
} while (chute !== numeroCorreto);

console.log("Parabéns! Você acertou");
