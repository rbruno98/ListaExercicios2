/*
Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número.
*/

const alunosENotas = {
  aluno1: "João",
  nota1: 7.8,
  aluno2: "Pedro",
  nota2: 9,
  aluno3: "Marcos",
  nota3: 4,
  aluno4: "Gabriel",
  nota4: 10,
};

function qtdString() {
  let soma = 0;
  for (let string in alunosENotas)
    if (typeof alunosENotas[string] === "string") {
      soma++;
    }
  return soma;
}

console.log(qtdString(alunosENotas));
