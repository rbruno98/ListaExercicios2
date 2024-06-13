/*
Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados.
*/

let matrizCinco = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
let sL = Array(5).fill(0);
let sC = Array(5).fill(0);
function somaLinhasColunas(matrizCinco) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      sL[i] += matrizCinco[i][j];
      sC[j] += matrizCinco[i][j];
    }
  }
  return { sL, sC };
}

somaLinhasColunas(matrizCinco);
console.log(`A matriz usada para criar os vetores foi`, matrizCinco);
console.log(sL);
console.log(sC);
