/*
Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.
*/

let vetor6Posicoes = [];
for (let i = 0; i < 6; i++) {
  vetor6Posicoes.push(Math.floor(Math.random() * 20));
}

let numeroIdentificador = Math.floor(Math.random() * 6);

let somaElementos = 0;
for (let i = 0; i < vetor6Posicoes.length; i++) {
  somaElementos += vetor6Posicoes[i];
}

let produtoElementos = vetor6Posicoes.reduce((a, b) => a * b, 1);

let mediaElementos = somaElementos / vetor6Posicoes.length;

let ordemCrescente = vetor6Posicoes.sort((a, b) => a - b);

console.log(`O número identificador é ${numeroIdentificador}`);

switch (numeroIdentificador) {
  case 1:
    console.log(`A soma dos elementos do vetor é ${somaElementos}`);
    break;
  case 2:
    console.log(`O produto dos elementos do vetor é ${produtoElementos}`);
    break;
  case 3:
    console.log(
      `A média dos elementos do vetor é ${mediaElementos.toFixed(2)}`
    );
    break;
  case 4:
    console.log(
      `Assim ficam os elementos do vetor em ordem crescente ${ordemCrescente}`
    );
    break;
  case 5:
    console.log(`Vetor original: ${vetor6Posicoes}`);
    break;
  default:
    console.log("Operação inválida!");
}
