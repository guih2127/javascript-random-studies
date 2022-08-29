// Deckaração de função (Function hoisting)
// Apenas declarando a função dessa maneira que ocorrerá o hoisting, ou seja,
// ela poderá ser chamada no início do do arquivo, mesmo sendo declara embaixo.
// Isso acontece porque funções com essa sintaxe são levadas para a parte de
// cima do arquivo, pelo javascript.
falaOi();

function falaOi() {
  console.log("Oi");
}

// Funções são first-class objects. A função pode ser tratada como um dado.
// Podemos criar uma função e atribuí-la à uma variável.
const souUmDado = function () {
  console.log("Sou um dado");
};

// Isso faz com que possamos passar funções por parâmetros e exectá-las.
function executaFuncao(funcao) {
  console.log("Vou executar sua função abaixo!");
  funcao();
}

executaFuncao(souUmDado);

// Arrow Functions
const funcaoArrow = () => {
  console.log("Sou uma arrow function!");
};

funcaoArrow();

// Dentro de um objeto - Funções podem ser propriedades de um objeto.
// Podemos, dentro de um objeto, declarar elas sem o function.
const obj = {
  falar() {
    console.log("Estou falando!");
  },
};

obj.falar();
