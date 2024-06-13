/* 
2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km
h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/

const prompt = require("prompt-sync")();

let velocidade = parseInt(prompt("Quantos Km/h o carro passou pelo radar? "));
let kmAcima = velocidade - 80;
let multa = kmAcima * 5;

if (velocidade > 80) {
  console.log(
    `Você está ${kmAcima} acima do limite permitido. Sua multa será de R$${multa}. `
  );
} else {
  console.log("Você está dentro do limite de velocidade, boa viagem!");
}
