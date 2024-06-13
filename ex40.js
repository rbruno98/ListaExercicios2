/*
Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.)
*/

let resultadoLoto = [];
for (let i = 0; i < 5; i++) {
  resultadoLoto.push(Math.floor(Math.random() * 10));
}

let apostadores = [];
for (let i = 0; i < 50; i++) {
  let respostas = [];
  for (let j = 0; j < 5; j++) {
    respostas.push(Math.floor(Math.random() * 10));
  }
  apostadores.push({ Aposta: i + 1, númerosApostados: respostas });
}

apostadores.forEach((apostador) => {
  let acertos = 0;
  for (let i = 0; i < 5; i++) {
    if (apostador.númerosApostados[i] === resultadoLoto[i]) {
      acertos++;
    }
  }
  console.log(`Apostador ${apostador.Aposta}: ${acertos} acertos`);
  if (acertos === 5) {
    console.log("GANHADOR, PARABÉNS");
  }
});

console.log(`O resultado da Loto é: ${resultadoLoto}`);
