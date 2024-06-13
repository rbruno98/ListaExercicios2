/*
A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a

média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.
*/

const prompt = require("prompt-sync")();

let totalSalario = 0;
let totalFilhos = 0;
let mediaSalario = 0;
let mediaFilhos = 0;
let maiorSalario = 0;
let finalizar;
let percentualTrezentosECinquenta = 0;

function calcularDadosCidade() {
  while (finalizar !== "Sim") {
    let perguntaSalario = parseFloat(
      prompt("Digite o salário do morador da cidade: ")
    );
    let perguntaFilhos = parseFloat(
      prompt("Quantos filhos esse morador tem? ")
    );
    totalSalario += perguntaSalario;
    totalFilhos += perguntaFilhos;
    mediaSalario++;
    mediaFilhos++;
    if (perguntaSalario > maiorSalario) {
      maiorSalario = perguntaSalario;
    }
    if (perguntaSalario <= 350) {
      percentualTrezentosECinquenta++;
    }
    finalizar = prompt(
      "Você deseja finalizar e calcular os dados da população? (Sim/Não) "
    );
  }
}
calcularDadosCidade();

let resultadoPercentual = (percentualTrezentosECinquenta / mediaSalario) * 100;
let resultadoMediaSalario = totalSalario / mediaSalario;
let resultadoMediaFilhos = totalFilhos / mediaFilhos;
console.log(
  `A média de salário da cidade é: R$${resultadoMediaSalario.toFixed(2)}`
);
console.log(
  `A média de filhos da cidade é: R$${resultadoMediaFilhos.toFixed(2)}`
);
console.log(`A maior salário da cidade é: R$${maiorSalario}`);
console.log(
  `O percentual de pessoas com salário até R$350,00 é: ${resultadoPercentual}%`
);
