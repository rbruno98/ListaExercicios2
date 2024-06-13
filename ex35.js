/*
Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias.
*/

let conjuntoValores = [];
for (let i = 0; i < 30; i++) {
  conjuntoValores.push(Math.floor(Math.random() * 100));
}

let pares = [];
let impares = [];

for (let i = 0; i < conjuntoValores.length; i++) {
  if (conjuntoValores[i] % 2 === 0) {
    pares.push(conjuntoValores[i]);
    if (pares.length === 5) {
      console.log("Conjunto de 5 números pares: ", pares);
      pares = [];
    }
  } else {
    impares.push(conjuntoValores[i]);
    if (impares.length === 5) {
      console.log("Conjunto de 5 números ímpares: ", impares);
      impares = [];
    }
  }
}
