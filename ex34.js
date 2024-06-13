/*
Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações.
*/

function gerarMatriz() {
  let matriz = [];
  for (let i = 0; i < 50; i++) {
    let linha = [];
    for (let j = 0; j < 50; j++) {
      linha.push(Math.random() * 100);
    }
    matriz.push(linha);
  }
  return matriz;
}

let matriz = gerarMatriz();

function multiplicarLPorDiagonal(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    let elementoDiagonal = matriz[i][i];
    for (let j = 0; j < matriz.length; j++) {
      matriz[i][j] *= elementoDiagonal;
    }
  }
  return matriz;
}

console.log("Matriz após as multiplicações");
console.log(multiplicarLPorDiagonal(matriz));
