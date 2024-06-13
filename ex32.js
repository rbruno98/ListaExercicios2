/*
Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada.
*/

let M = [
  [1, -2, 3, 4, -5, 6, 7, 8, -9, 10, 11, -12, 13],
  [14, -15, 16, -17, 18, 19, -20, 21, 22, 23, -24, 25, 26],
  [27, -28, 29, 30, 31, -32, 33, 34, -35, 36, 37, -38, 39],
  [40, -41, 42, 43, 44, -45, 46, 47, -48, 49, 50, -51, 52],
  [53, -54, 55, 56, 57, -58, 59, 60, -61, 62, 63, -64, 65],
  [66, -67, 68, 69, 70, -71, 72, 73, -74, 75, 76, -77, 78],
  [79, -80, 81, 82, 83, -84, 85, 86, -87, 88, 89, -90, 91],
  [92, -93, 94, 95, 96, -97, 98, 99, -100, 101, 102, -103, 104],
  [105, -106, 107, 108, 109, -110, 111, 112, -113, 114, 115, -116, 117],
  [118, -119, 120, 121, 122, -123, 124, 125, -126, 127, 128, -129, 130],
  [131, -132, 133, 134, 135, -136, 137, 138, -139, 140, 141, -142, 143],
  [144, -145, 146, 147, 148, -149, 150, 151, -152, 153, 154, -155, 156],
];

function maiorElemento(linha) {
  let maiorNumero = 0;
  for (let i = 0; i < linha.length; i++) {
    if (Math.abs(linha[i]) > maiorNumero) {
      maiorNumero = Math.abs(linha[i]);
    }
  }
  return maiorNumero;
}

function modificarMatriz(M) {
  let linhas = M.length;
  let colunas = M[0].length;
  let matrizModificada = [];
  for (let i = 0; i < linhas; i++) {
    let maiorElementoEncontrado = maiorElemento(M[i]);
    let linhaNova = [];
    for (let j = 0; j < colunas; j++) {
      linhaNova.push(M[i][j] / maiorElementoEncontrado);
    }
    matrizModificada.push(linhaNova);
  }

  console.log("Matriz inicial: ");
  console.log(M);
  console.log("Matriz modificada: ");
  for (let i = 0; i < linhas; i++) {
    console.log(matrizModificada[i]);
  }
}

modificarMatriz(M);
