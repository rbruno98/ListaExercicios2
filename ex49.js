/*
Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
*/

const transacoesFinanceiras = [
  {
    id: 1,
    valor: 100,
    data: "20/06/2024",
    categoria: "Eletrodomésticos",
  },
  { id: 2, valor: 500, data: "01/07/2024", categoria: "Móveis" },
  {
    id: 3,
    valor: 200,
    data: "10/07/2024",
    categoria: "Eletrodomésticos",
  },
  {
    id: 4,
    valor: 80,
    data: "23/07/2024",
    categoria: "Cama e Banho",
  },
  { id: 5, valor: 800, data: "02/08/2024", categoria: "Móveis" },
  {
    id: 6,
    valor: 150,
    data: "05/08/2024",
    categoria: "Eletrodomésticos",
  },
  {
    id: 7,
    valor: 45,
    data: "14/08/2024",
    categoria: "Cama e Banho",
  },
  {
    id: 8,
    valor: 100,
    data: "20/08/2024",
    categoria: "Móveis",
  },
  {
    id: 9,
    valor: 120,
    data: "30/08/2024",
    categoria: "Cama e Banho",
  },
  {
    id: 10,
    valor: 300,
    data: "10/09/2024",
    categoria: "Eletrodomésticos",
  },
];

function criarNovoObjetoTransacoes(transacoesFinanceiras) {
  let novoArrayTransacoes = {};

  transacoesFinanceiras.forEach((transacao) => {
    const { id, valor, data, categoria } = transacao;

    if (!novoArrayTransacoes[categoria]) {
      novoArrayTransacoes[categoria] = {
        transacoesFinanceiras: [],
        subtotal: 0,
      };
    }

    novoArrayTransacoes[categoria].transacoesFinanceiras.push({
      id,
      valor,
      data,
    });
    novoArrayTransacoes[categoria].subtotal += valor;
  });

  return novoArrayTransacoes;
}

const resultado = criarNovoObjetoTransacoes(transacoesFinanceiras);
console.log(resultado);
