/*
  Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci.
*/
let vetorFibonacci = [1, 1];
function fibonacciQuinze() {
  for (i = 2; i < 15; i++) {
    let numerosFibonacci;
    numerosFibonacci = vetorFibonacci[i - 1] + vetorFibonacci[i - 2];
    vetorFibonacci.push(numerosFibonacci);
  }
  return vetorFibonacci;
}

console.log(fibonacciQuinze(vetorFibonacci));
