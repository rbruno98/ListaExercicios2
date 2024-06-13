/*
Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.
*/

const dados = {
  time: "Grêmio",
  titulosLibertadores: 3,
  anosLibertadores: [83, 95, 17],
  titulosBrasileiro: 2,
  anosBrasileiro: [81, 96],
};

function propriedadesArrays(dados) {
  let arraysDados = {};
  for (let arr in dados) {
    if (Array.isArray(dados[arr])) {
      arraysDados[arr] = dados[arr];
    }
  }
  return arraysDados;
}

console.log(propriedadesArrays(dados));
