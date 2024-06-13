/*
Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência.
*/

const prompt = require("prompt-sync")();

let primeiroTermo = parseInt(
  prompt("Digite o primeiro termo da Progressão Aritmética: ")
);

let razãoPa = parseInt(prompt("Digite a razão da Progressão Aritmética: "));

let somaPa = 0;
for (let numerosPa = 0; numerosPa < 10; numerosPa++) {
  let operacao = primeiroTermo + numerosPa * razãoPa;
  somaPa += operacao;
  console.log(`${numerosPa + 1}: ${operacao}`);
}

console.log(`A soma de todos os valores da PA é: ${somaPa}`);
