// Objetos literais -> JS automaticamente usa o new Object()
// Object.prototype, vem como __proto__ na instância.
const objetoA = {
  chaveA: "A",
};

const objetoB = {
  chaveB: "B",
};

const objetoC = new Object();
objetoC.chaveC = "C";

// Podemos definir qual será o prototype de um objeto.
// Nesse caso, o prototype de B será A.
Object.setPrototypeOf(objetoB, objetoA);
Object.setPrototypeOf(objetoC, objetoB);
// Nesse caso, teremos o prototype do objeto C = o objeto B.
// O prototype de B é o objeto A. Dessa forma, fazemos uma "cadeia" de protos.

// Não é muito recomendado utilizar a propriedade __proto__, pois pode
// atrapalhar performance e causar alguns problemas.
// Para acessar o proto podemos utilizar a função Object.getPrototypeOf();
console.log(Object.getPrototypeOf(objetoA));

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;

  // Não vamos criar metódos aqui dentro, vamos utilizar o prototype.
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const p1 = new Produto("Camiseta", 50);
console.log(p1);
p1.desconto(100);
console.log(p1);
p1.preco = 50;
p1.aumento(200);
console.log(p1);
