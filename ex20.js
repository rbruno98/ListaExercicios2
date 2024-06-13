/*
Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS).
*/

const prompt = require("prompt-sync")();

const quadroFuncionarios = [];
for (i = 1; i <= 80; i++) {
  quadroFuncionarios.push({
    matricula: i,
    nome: "Funcionário " + i,
    salárioBruto: Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000,
  });
}

function contracheques(quadroFuncionarios) {
  quadroFuncionarios.forEach((funcionario) => {
    let deducaoInss = funcionario.salárioBruto * 0.12;
    let salárioLíquido = funcionario.salárioBruto - deducaoInss;

    console.log(`Matrícula: ${funcionario.matricula}`);
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Salário bruto: R$${funcionario.salárioBruto}`);
    console.log(`Dedução INSS: R$${deducaoInss.toFixed(2)}`);
    console.log(`Salário líquido: R$${salárioLíquido.toFixed(2)}`);
    console.log("________________________");
  });
}

contracheques(quadroFuncionarios);
