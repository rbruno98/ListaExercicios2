/*
Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.
*/

const vendas = [
  { vendedor: "Felipe", valorDaVenda: 20.5 },
  { vendedor: "Márcio", valorDaVenda: 15 },
  { vendedor: "João", valorDaVenda: 22 },
  { vendedor: "Felipe", valorDaVenda: 30 },
  { vendedor: "João", valorDaVenda: 10 },
  { vendedor: "Bruno", valorDaVenda: 80 },
  { vendedor: "João", valorDaVenda: 15 },
];

function valorVendasVendedor() {
  let valorVendas = {};
  vendas.forEach((venda) => {
    let { vendedor, valorDaVenda } = venda;
    if (valorVendas[vendedor]) {
      valorVendas[vendedor] += valorDaVenda;
    } else {
      valorVendas[vendedor] = valorDaVenda;
    }
  });
  return valorVendas;
}

console.log(valorVendasVendedor(vendas));
