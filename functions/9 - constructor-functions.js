// Função construtora -> Retorna objetos.
// Precisamos chamar com o New()
// Convenção, funções construtoras começam com letra maiuscula.
// Não precisamos dar o return aqui, pois quando utilizamos o New,
// automaticamente ele associa e aponta os this do metódo para a variável
// que estamos atribuindo com o New.

function Pessoa(nome, sobrenome) {
  const metodoInterno = function () {
    console.log("Não posso ser acessada externamente");
  };
  // Quando declaramos algo aqui com const, temos uma variável privada.
  this.nome = nome;
  this.sobrenome = nome;
  // Quanto utilizamos a palavra this, são considerados propriedades públicos.
}

const p1 = new Pessoa("Guilherme", "Reis");
console.log(p1);
