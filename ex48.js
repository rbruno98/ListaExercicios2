/*
Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades.
*/

const inventarioLojaA = {
  tenis: 50,
  camisetas: 30,
  calças: 25,
  bonés: 10,
  óculos: 20,
};

const inventarioLojaB = {
  panoDePrato: 30,
  toalhas: 18,
  camisetas: 20,
  cobertores: 26,
  lençol: 40,
};

function inventarioDuasLojas(A, B) {
  let inventarioLojas = {};
  for (chave in A) {
    inventarioLojas[chave] = A[chave];
  }

  for (let item in B) {
    if (item in inventarioLojas) {
      inventarioLojas[item] += B[item];
    } else {
      inventarioLojas[item] = B[item];
    }
  }
  return inventarioLojas;
}

console.log(inventarioDuasLojas(inventarioLojaA, inventarioLojaB));
