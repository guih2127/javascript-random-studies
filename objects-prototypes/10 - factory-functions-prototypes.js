const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  },
};

const falar = {
  falar() {
    console.log(`${this.nome} está comendo.`);
  },
};

const pessoaPrototype = { ...comer, ...falar };

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome, enumerable: true },
    sobrenome: { value: sobrenome, enumerable: true },
  });
}

// Com as factory functions, conseguimos definir nosso prototype e
// nossas propriedades dessa maneira, criando um objeto para o proto
// e utilizando o Object.create descrevendo nossas propriedades e dizendo
// qual objeto será o proto.

const p1 = criaPessoa("Guilherme", "Reis");
console.log(p1);
p1.comer();
