/*
Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.
*/

const prompt = require("prompt-sync")();

function pesoIdeal(altura, sexo) {
  let peso = 0;
  if (sexo == "M") {
    peso = 72.7 * altura - 58;
  } else if (sexo == "F") {
    peso = 62.1 * altura - 44.7;
  }
  return peso;
}

let altura = parseFloat(prompt("Digite a sua altura: "));
let sexo = prompt("Você é do sexo Masculino ou Feminino(M/F)? ");

console.log(`O seu peso ideal é: ${pesoIdeal(altura, sexo).toFixed(2)}kg`);
