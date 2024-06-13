/*
Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.
*/

const prompt = require("prompt-sync")();

let somatórioValores = 0;
let media = 0;
let menorValor;
let numerosPares = 0;
let encerrarPrograma;

while (encerrarPrograma !== "Nao") {
  let valores = parseFloat(prompt("Digite um número desejado: "));
  somatórioValores += valores;
  if (media === 0 || valores < menorValor) {
    menorValor = valores;
  }
  if (valores % 2 === 0) {
    numerosPares++;
  }
  media++;

  encerrarPrograma = prompt(
    "Você deseja continuar acrescentando dados de funcionários? (Sim/Não)"
  );
}

console.log(`A soma entre todos os valores é de: ${somatórioValores}`);
console.log(`O menor valor digitado é: ${menorValor}`);
console.log(
  `A média de todos os números digitados foi de: ${(
    somatórioValores / media
  ).toFixed(1)}`
);
console.log(`Foi digitado ${numerosPares} número(s) par(es).`);
