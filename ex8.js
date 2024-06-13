/*
Um programa de vida saudável quer dar pontos por atividades físicas realizadas que
podem ser trocados por dinheiro. Cada hora de atividade física no mês vale pontos. O
sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
*/

const prompt = require("prompt-sync")();

let horasAtividade = prompt(
  "Quantas horas você praticou atividades físicas este mês? "
);
let ptsMenos10h = horasAtividade * 2;
let ptsMais10h = horasAtividade * 5;
let ptsMais20h = horasAtividade * 10;

if (horasAtividade < 10) {
  console.log(
    `Você teve ${ptsMenos10h} pontos este mês. E com isso faturou o valor de R$${
      ptsMenos10h * 0.05
    }. `
  );
} else if (horasAtividade > 20) {
  console.log(
    `Você teve ${ptsMais20h} pontos este mês. E com isso faturou o valor de R$${
      ptsMais20h * 0.05
    }. `
  );
} else {
  console.log(
    `Você teve ${ptsMais10h} pontos este mês. E com isso faturou o valor de R$${
      ptsMais10h * 0.05
    }. `
  );
}
