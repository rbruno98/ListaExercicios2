/*
Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.
*/

let matrizCinco = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];

let soma4 = 0;
function somaLinhaQuatro() {
  for (let i = 0; i < matrizCinco.length; i++) {
    for (let j = 0; j < matrizCinco[i].length; j++) {
      if (i === 3) {
        soma4 += matrizCinco[i][j];
      }
    }
  }
  return soma4;
}
somaLinhaQuatro();

let somaColuna2 = 0;
function somaColunaDois() {
  for (let i = 0; i < matrizCinco.length; i++) {
    for (let j = 0; j < matrizCinco[i].length; j++) {
      if (j === 1) {
        somaColuna2 += matrizCinco[i][j];
      }
    }
  }
  return somaColuna2;
}
somaColunaDois();

let somaDiagonalP = 0;
function somaDiagonalPrincipal() {
  for (let i = 0; i < matrizCinco.length; i++) {
    for (let j = 0; j < matrizCinco[i].length; j++) {
      if (i === j) {
        somaDiagonalP += matrizCinco[i][j];
      }
    }
  }
  return somaDiagonalP;
}
somaDiagonalPrincipal();

let somaTotalMatriz = 0;
function somaMatrizInteira() {
  for (let i = 0; i < matrizCinco.length; i++) {
    for (let j = 0; j < matrizCinco[i].length; j++) {
      somaTotalMatriz += matrizCinco[i][j];
    }
  }
  return somaTotalMatriz;
}
somaMatrizInteira();

console.log(`A soma da linha 4 é: ${soma4}`);
console.log(`A soma da coluna 2 é: ${somaColuna2}`);
console.log(`A soma da diagonal principal é: ${somaDiagonalP}`);
console.log(`A soma total da matriz é: ${somaTotalMatriz}`);
console.log(`A matriz 5x5 usada foi: `, matrizCinco);
