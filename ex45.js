/*
Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array.
*/

let arrayString = [
  "Maria",
  "Joana",
  "Ana",
  "Gabriela",
  "Fernanda",
  "Cecília",
  "Ana",
  "Gabriela",
  "Bruna",
  "Ana",
  "Joana",
  "Cecília",
];

function objString() {
  let contagemString = {};
  arrayString.forEach((contagem) => {
    if (contagemString[contagem]) {
      contagemString[contagem]++;
    } else {
      contagemString[contagem] = 1;
    }
  });
  return contagemString;
}

console.log(objString(arrayString));
