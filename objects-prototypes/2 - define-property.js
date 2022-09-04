function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;
  this.estoque = estoque;

  // Com a função defineProperty, podemos definir algumas coisas
  // do objeto, por exemplo, se ele vai ser exibido ou não, se ele
  // pode ser modificado ou não.
  Object.defineProperty(this, "estoque", {
    enumerable: true, // mostra a chave
    value: estoque, // seta o valor
    writable: false, // pode alterar ou não o valor
    configurable: true, // se ela é configurável ou não (se não for configurable),
    // essa mesma função de defineProperty não funcionará denovo.
  });

  // Podemos fazer todas as configurações de uma vez com a defineProperties()
  Object.defineProperties(this, {
    nome: {
      enumerable: false,
    },
    preco: {
      enumerable: false,
    },
    estoque: {
      enumerable: false,
    },
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1); // Nome é uma variável pública;

// Se o enumerable estiver true, podemos ver as chaves deste objeto.
console.log(Object.keys(p1));
