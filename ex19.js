/*
Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de
repetição. Escrever cada um deles no formato HH.MM.SS.
*/

const prompt = require("prompt-sync")();

let horario = [];

for (i = 1; i <= 5; i++) {
  let horarios = prompt(`Digite o ${[i]} horário(HH:MM:SS): `);
  horario.push(horarios);
}

console.log("Horários digitados:");
console.log(horario);
