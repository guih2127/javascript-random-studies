// Closures
// Aqui não temos nada de novo. Criamos uma função que retorna uma função anônima,
// essa, por sua vez, tem acesso ao escopo da retornaFuncao(), e, então, retorna
// a variável nome.
// A função anônima tem acesso à três escopos. O global, o do parente retornaFuncao()
// e o dela próprio.

function retornaFuncao(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao("Luiz");
const funcao2 = retornaFuncao("Guilherme");
console.log(funcao());
console.log(funcao2());

const x = 10;

// Closure é quando uma função "lembra" do seu escopo léxico,
// mesmo quando ela é executada fora desse escopo léxico.
function fora() {
  const x = 3;
  function somarXMais3() {
    return x + 3;
  }

  return somarXMais3;
}

// Aqui podemos ver que, mesmo chamando a função somarXMais3 no escopo global,
// ela "lembra" do seu escopo léxico, ou seja, por mais que tenhamos
// declarado a variável x = 10 globalmente, ela lembra do seu escopo dentro
// da função fora(), e considera a variável declarada nesse escopo, que é 3.
const somarXMais3 = fora();
console.log(somarXMais3());
