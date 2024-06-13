/*
Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária.
*/

let tresPorTres = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function diagonalPrincipal(tresPorTres) {
  let numerosDiagonalP = [];
  for (let i = 0; i < tresPorTres.length; i++) {
    numerosDiagonalP.push(tresPorTres[i][i]);
  }
  return numerosDiagonalP;
}

let numeroMultiplicar = diagonalPrincipal(tresPorTres);

function diagonalSecundaria(tresPorTres) {
  let soma = 0;
  let numeros = tresPorTres.length;
  for (i = 0; i < numeros; i++) {
    soma += tresPorTres[i][numeros - 1 - i];
  }
  return soma / numeros;
}

let mediaDiagonalSecundaria = diagonalSecundaria(tresPorTres);

function multiplicacao() {
  let resultado = [];
  for (i = 0; i < numeroMultiplicar.length; i++) {
    resultado.push(numeroMultiplicar[i] * mediaDiagonalSecundaria);
  }
  return resultado;
}

console.log(
  "Resultado da multiplicação dos números da diagonal principal pela média da diagonal secundária:"
);
console.log(multiplicacao());
