/*
Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.
*/

let vetorA = [];
for (let i = 0; i < 100; i++) {
  vetorA.push(Math.floor(Math.random() * 201) - 100);
}

let vetorB = [];
for (let i = 0; i < vetorA.length; i++) {
  if (vetorA[i] >= 1) {
    vetorB.push(vetorA[i]);
  }
}
console.log("Vetor A", vetorA);
console.log("Vetor B sem os números nulos e negativos", vetorB);
