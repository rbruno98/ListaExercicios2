/*
Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.
*/

const prompt = require("prompt-sync")();

let listaNome = [];
let listaIdade = [];

function nomeIdade() {
  for (i = 1; i <= 9; i++) {
    let perguntaNome = prompt(`Digite o nome da ${i} pessoa: `);
    listaNome.push(perguntaNome);
    let perguntaIdade = parseInt(prompt(`Digite a idade de ${perguntaNome}: `));
    listaIdade.push(perguntaIdade);
  }
}

function menoresDeIdade() {
  console.log("Menores de idade:");
  for (i = 0; i < listaNome.length; i++) {
    if (listaIdade[i] < 18) {
      console.log(`${listaNome[i]}:  ${listaIdade[i]} anos.`);
    }
  }
}

nomeIdade();
menoresDeIdade();
