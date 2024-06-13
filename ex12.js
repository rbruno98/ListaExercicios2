/*
Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.
*/

let ultimo = 1;
let penultimo = 0;
let fibonacci = 1;
console.log(fibonacci);
for (i = 1; i < 10; i++) {
  fibonacci = penultimo + ultimo;
  penultimo = ultimo;
  ultimo = fibonacci;
  console.log(fibonacci);
}
