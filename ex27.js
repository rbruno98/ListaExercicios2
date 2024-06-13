/*
Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final.
*/

function gerarMatrizM() {
  let matrizM = [];
  for (let i = 0; i < 6; i++) {
    let linhaM = [];
    for (let j = 0; j < 6; j++) {
      linhaM.push(Math.floor(Math.random() * 100));
    }
    matrizM.push(linhaM);
  }
  return matrizM;
}

let valorA = Math.floor(Math.random() * 100);

function calculoV(matrizM, valorA) {
  let V = [];

  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      V.push(matrizM[i][j] * valorA);
    }
  }
  return V;
}

function resultadoV() {
  let matrizM = gerarMatrizM();
  let V = calculoV(matrizM, valorA);

  console.log(`O valor de A para fazer as multiplicações é: ${valorA}`);
  console.log(`O resultado das multiplicações serão: `);
  console.log(V);
}
resultadoV();
