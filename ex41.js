/*
Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade.
*/

const pessoa = {
  nome: "Bruno",
  idade: 25,
};

console.log(pessoa.idade);

pessoa.email = "exemplo@gmail.com";

console.log(pessoa);
