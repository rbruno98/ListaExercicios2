/*
Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km
*/

const prompt = require("prompt-sync")();
let escolhaCarro = prompt("Você deseja alugar um carro popular ou de luxo? ");
let diasAlugados = prompt("Quantos dias você deseja alugar este carro? ");
let kmPercorridos = prompt("Quantos km você irá percorrer com este carro? ");

let menos100Km = kmPercorridos * 0.2;
let mais100Km = kmPercorridos * 0.1;
let menos200Km = kmPercorridos * 0.3;
let mais200Km = kmPercorridos * 0.25;
let operacaoPopular = diasAlugados * 90;
let operacaoLuxo = diasAlugados * 150;

if (escolhaCarro == "Popular" && kmPercorridos <= 100) {
  console.log(
    `O valor total do aluguel do seu carro ficou: R$${
      menos100Km + operacaoPopular
    }`
  );
} else if (escolhaCarro == "Popular" && kmPercorridos > 100) {
  console.log(
    `O valor total do aluguel do seu carro ficou: R$${
      mais100Km + operacaoPopular
    }`
  );
} else if (escolhaCarro == "Luxo" && kmPercorridos <= 200) {
  console.log(
    `O valor total do aluguel do seu carro ficou: R$${
      menos200Km + operacaoLuxo
    }`
  );
} else {
  console.log(
    `O valor total do aluguel do seu carro ficou: R$${mais200Km + operacaoLuxo}`
  );
}
