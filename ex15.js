/*
Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.
*/

const prompt = require("prompt-sync")();

let listaNumeros = Array();
let pares = Array();
let posição = Array();

for (i = 0; i < 10; i++) {
  let numeros = parseInt(
    prompt("Digite um número que deseja adicionar ao vetor: ")
  );
  listaNumeros.push(numeros);
  if (numeros % 2 === 0) {
    pares.push(numeros);
    posição.push(i);
  }
}

console.log(`Os números pares digitados foram: ${pares}`);
console.log(`E suas posições são: ${posição}`);
