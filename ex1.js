/* 
1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.
*/

const prompt = require("prompt-sync")();

let cigarros = prompt("Quantos cigarros por dia você fuma? ");
let anosFumante = prompt("Faz quantos anos que você fuma? ");

let totalCigarros = cigarros * (anosFumante * 365);
let minutosPerdidos = totalCigarros * 10;
let diasPerdidos = parseInt(minutosPerdidos / 1440);

console.log(`Você perdeu ${diasPerdidos} dias da sua vida fumando, PARE JÁ!`);
