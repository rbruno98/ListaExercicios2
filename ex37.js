/*
Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário.
*/

let vetorG = [];
for (let i = 0; i < 20; i++) {
  vetorG.push(Math.floor(Math.random() * 10));
}

let alunos = [];
for (let i = 0; i < 50; i++) {
  let vetorR = [];
  for (let j = 0; j < 20; j++) {
    vetorR.push(Math.floor(Math.random() * 10));
  }
  alunos.push({ Aluno: i + 1, Acertos: vetorR });
}

alunos.forEach((aluno) => {
  let acertos = 0;
  for (let i = 0; i < 20; i++) {
    if (aluno.Acertos[i] === vetorG[i]) {
      acertos++;
    }
  }
  console.log(`Aluno ${aluno.Aluno}: ${acertos} acertos`);
  if (acertos >= 12) {
    console.log("Aluno APROVADO");
  } else {
    console.log("Aluno REPROVADO");
  }
});
