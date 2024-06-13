/*
Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5].
*/

let matrizA = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];
let matrizB = [
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
];

function calculoProduto(matrizA, matrizB) {
  let linhaMatriz = matrizA.length;
  let colunaMatriz = matrizA[0].length;
  let P = [];
  for (let i = 0; i < linhaMatriz; i++) {
    P[i] = [];
    for (let j = 0; j < colunaMatriz; j++) {
      P[i][j] = matrizA[i][j] * matrizB[i][j];
    }
  }

  return P;
}

console.log(calculoProduto(matrizA, matrizB));
