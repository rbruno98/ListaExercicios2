/*
Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.
*/

const prompt = require("prompt-sync")();

let salarioHomens = 0;
let salarioMulheres = 0;
let encerrar;

while (encerrar !== "Nao") {
  let salario = parseFloat(prompt("Qual o seu salário mensal? "));
  let sexo = prompt("Você é do sexo Masculino ou Feminino? (M/F) ");
  if (sexo == "M") {
    salarioHomens += salario;
  } else if (sexo == "F") {
    salarioMulheres += salario;
  }
  encerrar = prompt(
    "Você deseja continuar acrescentando dados de funcionários? (Sim/Não)"
  );
}

console.log(`O programa foi encerrado.`);
console.log(
  `O valor total de salário pago aos homens foi de: R$${salarioHomens}. E para as mulheres foi de: R$${salarioMulheres}`
);
