/* 
Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.
*/

const prompt = require("prompt-sync")();

let distância = prompt("Sua viagem será de quantos Km? ");

if (distância <= 200) {
  let viagemCurta = (distância * 0.5).toFixed(2);
  console.log(`O valor da sua passagem será de R$${viagemCurta}.`);
} else {
  let viagemLonga = (distância * 0.45).toFixed(2);
  console.log(`O valor da sua passagem será de R$${viagemLonga}.`);
}
