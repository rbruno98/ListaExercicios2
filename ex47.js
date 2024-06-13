/*
Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados.
*/

const objetoEntrada = {
  propriedadeUm: 50,
  propriedadeDois: 100,
  propriedadeTres: 80,
  propriedadeQuarto: 60,
  propriedadeCinco: 14,
  propriedadeSeis: 42,
};

function transformacao(objetoEntrada, valor) {
  let objetoMudado = {};
  for (let prop in objetoEntrada) {
    objetoMudado[prop] = valor(objetoEntrada[prop]);
  }
  return objetoMudado;
}

console.log("O objeto após a alteração fica: ");
console.log(transformacao(objetoEntrada, (valor) => valor / 2));
