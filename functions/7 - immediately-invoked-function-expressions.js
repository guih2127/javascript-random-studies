// IIFE -> Immediately invoked function expressions

// É importante separarmos nossa implementação do escopo global.
// Aqui no caso, temos uma função anônima que é chamada automaticamente
// ao rodar o arquivo. Dentro dessa função podemos escrever literalmente
// qualquer coisa que escreveriamos no escopo global.

const name = "Lucas";
(function () {
  const nome = "Guilherme";
  console.log(123456);

  function falaNome() {
    console.log(nome);
  }

  falaNome();
})();
