/*
Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos.
*/

const frutas = {
  fruta1: "Laranja",
  fruta2: "Mamão",
  fruta3: "Maça",
  fruta4: "Morango",
  fruta5: "Ameixa",
};

const animais = {
  animal1: "Leão",
  animal2: "Canguru",
  animal3: "Rinoceronte",
  animal4: "Girafa",
  fruta5: "Zebra", //Exemplo para mostrar a ordem de precedência
};

function objetosJuntos() {
  return { ...frutas, ...animais };
}

console.log(objetosJuntos(frutas, animais));
