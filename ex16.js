/*
Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.
*/

let vinteNumeros = Array();
function numerosAleatorios() {
  for (i = 0; i < 20; i++) {
    let gerarNumeros = Math.floor(Math.random() * 99);
    vinteNumeros.push(gerarNumeros);
  }
  return vinteNumeros;
}

let ordemCrescente = vinteNumeros;
console.log(`Os valores aleatórios gerados são:`);
console.log(numerosAleatorios(vinteNumeros));
console.log("A seguir, em ordem crescente: ");
console.log(ordemCrescente.sort());
