// Retorno da função
// Com o return, podemos capturar esse valor para uma variável.
function soma(a, b) {
  return a + b;
}

// Nesse caso, a função não retorna nada, apenas faz algo. No caso,
// logar aldo no console.
function somaConsole(a, b) {
  console.log(a + b);
}

const somaDoisCinco = soma(2, 5);
somaConsole(2, 5);
console.log(somaDoisCinco);

// Aqui, podemos usar uma função para retornar um objeto literal.
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
  };
}

const p1 = criaPessoa("Guilherme", "Reis");
console.log(p1);

// Aqui as coisas ficam um pouco mais complexas. Podemos criar uma função e
// dentro dela, criar outra função, e então retorná-la. É importante dizer
// que aqui não retornamos nenhum valor, e sim a função em si.
function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }

  return falaResto;
}

const olaMundo = falaFrase("Olá");
console.log(olaMundo("mundo"));

function duplica(n) {
  return n * 2;
}

function triplica(n) {
  return n * 3;
}

function quadriplica(n) {
  return n * 4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(4));

// Inclusive, aqui, conseguimos fazer uma melhora no código aplicando
// o conceito de retornar uma função através de outra.
function criaMultiplicador(multiplicador) {
  // multiplicador
  return function multiplicacao(n) {
    return n * multiplicador;
  };
}

const funcaoDuplicadora = criaMultiplicador(2);
const funcaoTriplicadora = criaMultiplicador(3);
const numeroDuplicado = funcaoDuplicadora(3);
console.log(numeroDuplicado);
