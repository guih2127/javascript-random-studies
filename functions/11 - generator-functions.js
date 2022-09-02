// Funções geradoras
// Com ela, podemos "pausar" um código em determinados lugares.
// Lazy Evaluation -> Não entrega todos os valores de uma vez.
// Podemos utilizar o yield para definir o que a funçõa irá retornar.
// Assim, quando damos um next(), passaremos para o próximo valor.

function* geradora1() {
  // Código qualquer...
  yield "Valor 1";

  // Código qualquer...
  yield "Valor 2";

  // Código qualquer...
  yield "Valor 3";
}

// Funções geradoras, com o yield, fazem basicamente uma "pausa" na função.

const g1 = geradora1();
// console.log(g1);
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());

// Podemos também iterar pelos valores
for (let valor of g1) {
  console.log(valor);
}

function* geradora2() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

// Podemos criar um gerador infinito.
const g2 = geradora2();
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());

// Podemos também concatenar geradores
function* geradora3() {
  yield 0;
  yield 1;
  yield 3;
}

function* geradora4() {
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

function* geradora5() {
  yield* geradora4();
  yield 6;
}

// Podemos também utilizar funções nos yields
function* geradoraNova() {
  yield function () {
    console.log("Vim do y1");
  };
  yield function () {
    console.log("Vim do y2");
  };
}
