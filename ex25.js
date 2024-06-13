/*
Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente.
*/

function matrizAleatoria() {
  let matriz1 = [];
  for (let i = 0; i < 15; i++) {
    let linha = [];
    for (let j = 0; j < 20; j++) {
      linha.push(Math.random() * 100);
    }
    matriz1.push(linha);
  }
  return matriz1;
}

function calculoColunas(matriz1) {
  let somaColunas = Array(20).fill(0);

  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 20; j++) {
      somaColunas[j] += matriz1[i][j];
    }
  }
  return somaColunas;
}

function resultado() {
  let matriz1 = matrizAleatoria();
  let somaColunas = calculoColunas(matriz1);

  console.log(`Soma de cada coluna:`);
  for (let j = 0; j < 20; j++) {
    console.log(`Coluna ${j + 1}: ${somaColunas[j].toFixed(2)}`);
  }
}

resultado();
