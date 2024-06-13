/*
Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos.
*/

function criarMatrizIdentidade(linha, coluna) {
  let matriz = [];
  for (let i = 0; i < linha; i++) {
    matriz[i] = [];
    for (let j = 0; j < coluna; j++) {
      matriz[i][j] = i === j ? 1 : 0;
    }
  }
  return matriz;
}

function imprimirMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join());
  }
}

let MatrizIdentidade = criarMatrizIdentidade(7, 7);

imprimirMatriz(MatrizIdentidade);
