// O JS é baseado em protótipos para passar propriedades e metódos de um objeto
// para outro.
// Protótipo é o termo usado para se referir ao que foi criado pela primeira vez,
// servindo de modelo ou molde para futuras produções.

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // this.nomeCompleto = () => {
  //   return this.nome + " " + this.sobrenome;
  // };
}

const p1 = new Pessoa("Guilherme", "Reis"); // Função construtora Pessoa
const p2 = new Pessoa("Guilherme", "Araujo");
const data = new Date(); // Função construtora Data

// Quando criamos uma função construtora, ela automaticamente tem atribuída
// a sí um prototype. Cada uma dessas instâncias criadas a partir
// dessa função terão acesso a este prototype.
// Quando tentarmos acessar um metódo, primeiro o motor do JS vai tentar
// acessar o metódo dentro do objeto. Se ele não encontrar, ele vai procurar
// no __proto__
console.log(Pessoa.prototype);

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + " " + this.sobrenome;
};

console.log(p1.nomeCompleto());
console.log(p2.__proto__ === Pessoa.prototype); // Vai retornar true
console.log(data);
// Problema de performance -> Temos a mesma função, várias vezes
// para cada uma das instâncias de Pessoa

// Cadeia de prototypes
// Object.prototype -> Pessoa.prototype -> Pessoa
