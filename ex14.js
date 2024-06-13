/*
Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.
*/

const prompt = require("prompt-sync")();

let listaNomes = Array();

function seteNomes() {
  for (i = 0; i < 7; i++) {
    let pergunta = prompt("Digite um nome: ");
    listaNomes.push(pergunta);
  }
  return listaNomes.reverse();
}

console.log(seteNomes(listaNomes));
