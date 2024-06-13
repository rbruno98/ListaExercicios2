/*
Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.
*/

const prompt = require("prompt-sync")();

const funcionário = {
  nome: "",
  cargo: "",
  salário: "",
};

function dadosFuncionario() {
  funcionário.nome = prompt("Digite o nome do funcionário: ");
  funcionário.cargo = prompt("Digite o cargo do funcionário: ");
  funcionário.salário = parseInt(
    prompt("Digite o salário deste funcionário: ")
  );
}
dadosFuncionario();
console.log(`Dados do funcionário`);
console.log(
  `Nome: ${funcionário.nome}. Cargo: ${funcionário.cargo}. Salário: R$${funcionário.salário}. `
);
