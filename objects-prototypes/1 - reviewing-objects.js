// Podemos criar objetos de várias formas, dentre elas:
// 1 - Literal:
// Literais são objetos criados diretamente, por exemplo, uma string é criada
// com '', um array com [], etc. Um objeto literal é criado com as chaves:
const pessoa = {
  nome: "Guilherme",
  sobrenome: "Reis",
};

// Podemos pegar os valores do objeto de tal forma:
console.log(pessoa.nome);
console.log(pessoa["nome"]);
// Na maioria das vezes utilizaremos a notação de ponto, mas a segunda pode
// ser interessante para alguns casos, principalmente porque podemos
// acessar uma chave dinamicamente.

// 2 - Construtor do objeto:
const pessoa1 = new Object();
pessoa1.nome = "Guilherme";
pessoa1.idade = 28;
console.log(pessoa1.nome);

// Podemos apagar uma propriedade de tal forma:
// delete pessoa1.nome;
// console.log(pessoa1);

// Objetos podem conter metódos. As vantagens de metódos dentro de objetos
// é ter acesso de propriedades de objeto dentro do metódo, utilizando o this.
pessoa1.falarNome = function () {
  console.log(`Esse é meu nome: ${this.nome}`);
};

pessoa1.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

pessoa1.falarNome();
console.log(pessoa1.getDataNascimento());

// Podemos ver as chaves, e tambem os valores, dentro de um objeto
for (let chave in pessoa1) {
  console.log(chave);
  console.log(pessoa1[chave]);
}

// 3 - Factory Functions e Constructor Functions / Classes
// Esses 2 são na verdade design patterns.
// Lembrando que dentro de uma objeto, podemos inclusive
// definir getters, que são funções que funcionam como propriedades protegidas
// (não podem ser modificadas) de uma função.
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criaPessoa("Guilherme", "Reis");
console.log(p1.nomeCompleto);

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.freeze(this); // Se quisermos impedir a alteração de valor de algo,
  // podemos utilizar o Object.freeze
  // O Object.freeze não nos deixa mais manipular nada dentro de um objeto.
}

// O que o new faz?
// Cria um objeto vazio {} - Atrela o this de dentro da função ao objeto.
// No final da função construtora, não precisamos utilizar o return.
// Obs: Com uma variável const, não podemos alterar o valor dela, mas podemos
// alterar o valor de uma de suas propriedades, por exemplo:
const p2 = new Pessoa("Guilherme", "Reis");
p2.vastoNome = "Lucas"; // Não funciona por causa do freeze.
console.log(p2);
