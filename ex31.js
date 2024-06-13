/*
Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados. 
*/

const prompt = require("prompt-sync")();

let A = parseInt(prompt("Digite um número inteiro: "));

function gerarMatrizV() {
  let matrizV = [];
  for (let i = 0; i < 30; i++) {
    let linhaV = [];
    for (let j = 0; j < 30; j++) {
      linhaV.push(Math.floor(Math.random() * 100));
    }
    matrizV.push(linhaV);
  }
  return matrizV;
}

function numerosIguais(A, matrizV) {
  let X = [];
  let iguaisA = 0;
  for (let i = 0; i < 30; i++) {
    for (let j = 0; j < 30; j++) {
      if (matrizV[i][j] === A) {
        iguaisA++;
      } else {
        X.push(matrizV[i][j]);
      }
    }
  }
  return X;
}

let V = gerarMatrizV();
console.log(`Matriz 30x30 V`, V);
console.log(`Matrix X com todos os números diferentes de A: `);
console.log(numerosIguais(A, V));
