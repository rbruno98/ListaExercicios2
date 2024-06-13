/*
Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de
um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número
do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o
número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva
o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a
mensagem "Parabéns, tu foi o GANHADOR".
*/

let gabarito = [];
for (let i = 0; i < 13; i++) {
  gabarito.push(Math.floor(Math.random() * 10));
}

let apostadores = [];
for (let i = 0; i < 100; i++) {
  let respostas = [];
  for (let j = 0; j < 13; j++) {
    respostas.push(Math.floor(Math.random() * 10));
  }
  apostadores.push({ Apostador: i + 1, númerosApostados: respostas });
}

apostadores.forEach((apostador) => {
  let acertos = 0;
  for (let i = 0; i < 13; i++) {
    if (apostador.númerosApostados[i] === gabarito[i]) {
      acertos++;
    }
  }
  console.log(`Apostador ${apostador.Apostador}: ${acertos} acertos`);
  if (acertos === 13) {
    console.log("Parabéns, tu foi o GANHADOR");
  }
});

console.log(`O gabarito da loteria é: ${gabarito}`);
