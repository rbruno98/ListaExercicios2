//Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

const prompt = require("prompt-sync")();

let jogador1 = prompt(
  "Jogador 1 escolha sua opção (Pedra, Papel ou Tesoura): "
);
let jogador2 = prompt(
  "Jogador 2 escolha sua opção (Pedra, Papel ou Tesoura): "
);

if (jogador1 == "Pedra" && jogador2 == "Tesoura") {
  console.log("Jogador 1 venceu.");
} else if (jogador1 == "Papel" && jogador2 == "Pedra") {
  console.log("Jogador 1 venceu.");
} else if (jogador1 == "Tesoura" && jogador2 == "Papel") {
  console.log("Jogador 1 venceu.");
} else {
  console.log("Jogador 2 venceu.");
}
