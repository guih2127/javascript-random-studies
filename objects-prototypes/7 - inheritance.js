function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

// Com o .call(), fazemdos a chamada do construtor de Produto()
// passando o this e os argumentos necessários.
// O problema é que, fazendo dessa forma, os metódos do protótipo
// não ficam disponíveis para as instâncias da nossa nova função.
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

// Com essas linhas de código, criamos um novo objeto a partir do prototype
// de produto e colocamos ele no prototype de camiseta.
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

// Podemos mudar o comportamendo de um metódo herdado, pois o JS
// sempre procura no prototype de Camiseta antes de procurar
// no prototype de Produto.
Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const camiseta = new Camiseta("regata", 70, "preta");
camiseta.aumento(10);
console.log(camiseta);

// Assim trabalhamos com herança. A camiseta tem as mesmas propriedades
// de produto e algumas extras.

function Caneca(nome, preco, material) {
  Produto.call(this, nome, preco);
  this.material = material;
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca("Caneca 1", 20, "Plastico");
console.log(caneca);
