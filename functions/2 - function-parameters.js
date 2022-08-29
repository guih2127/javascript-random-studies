function funcao(a, b, c) {
  console.log(arguments[0], arguments[1]);

  for (let argumento of arguments) {
    console.log(argumento);
  }

  console.log(a, b, c);
}

funcao("Valor", 1, 2, 3, 4, 5);
// O javascript não reclama se não declararmos parâmetros em uma função
// mas recebermos mesmo assim.
// Podemos capturar parâmetros dessa forma com o arguments, apenas
// se declararmos a função com a palavra function.
// Ainda assim, podemos passar os parâmetros normais pra função, e funcionarão
// normalmente

function funcao(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}

funcao(1, 2, 3);
// Se declararmos parâmetros mas não passarmos eles para a função,
// eles ficam como undefined, mas não gerarão erros também.

// Podemos passar valores padrões para parâmetros
// A única maneira de fazer o parâmetro assumir o valor padrão
// é enviando UNDEFINED ou não enviando um valor.
function soma(a, b = 2, c = 10) {
  console.log(a + b + c);
}

soma(1, 3);

function funcaoComDesestruturacao({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}

// Podemos também passar parametros por desestruturação.
let obj = { nome: "Guilherme", sobrenome: "Reis", idade: 27 };
funcaoComDesestruturacao(obj);

// Em alguns casos, podemos utilizar o REST operator, que pega
// todos os outros parâmetros da função que não foram declarados e coloca
// num array. O REST operator precisa ser sempre o último parâmetro.
function conta(operador, acumulador, ...numeros) {
  console.log(numeros);
}

// Podemos dar um uso para o REST operator de forma similar ao arguments
// (que não é recomendado). Com o REST operator, podemos fazer:
function funcaoRestOperator(...args) {
  console.log(args);
}

conta("+", 0, 1, 5, 10, 15, 20);
funcaoRestOperator(1, 2, 3, 4, 5);
