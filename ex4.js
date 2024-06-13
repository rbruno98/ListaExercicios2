/*
Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.
*/

const prompt = require("prompt-sync")();

let retaUm = parseInt(prompt("Digite o valor da primeira reta: "));
let retaDois = parseInt(prompt("Digite o valor da segunda reta: "));
let retaTres = parseInt(prompt("Digite o valor da terceira reta: "));

if (
  retaUm + retaDois > retaTres &&
  retaUm + retaTres > retaDois &&
  retaDois + retaTres > retaUm
) {
  console.log("É possível formar um triângulo com essas medidas.");
} else {
  console.log("Não é possível formar um triângulo com essas medidas.");
}
