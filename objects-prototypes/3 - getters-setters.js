function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: true,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== "number") throw new TypeError("Erro");
      estoque = valor;
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
p1.estoque = 5; // deveriamos ver se esse valor é um numero
// podemos usar getters e setters pra isso, para obter e setar valores
console.log(p1.estoque);
