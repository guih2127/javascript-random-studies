function randomNumber(min = 1000, max = 3000) {
  const number = Math.random() * (max - min) + min;
  return Math.floor(number);
}

function f1(callback) {
  setTimeout(function () {
    console.log("f1");
    if (callback) callback();
  }, randomNumber());
}

function f2(callback) {
  setTimeout(function () {
    console.log("f2");
    if (callback) callback();
  }, randomNumber());
}

function f3(callback) {
  setTimeout(function () {
    console.log("f3");
    if (callback) callback();
  }, randomNumber());
}

// f1(function () {
//   f2(function () {
//     f3();
//   });
// });

// Com o código dessa forma, definitivamente não sabemos a ordem que as funçõs
// serão executadas, já que cada função vai demorar um tempo diferente para
// executar, a o javascript não espera uma função para executar outra.
// Para resolver, podemos passar uma função de callback para essas funções.
// Com essa sintaxe, conseguimos fazer com que esse "Callback Hell" execute
// as funções exatamente na ordem desejada.
// Para melhorar um pouco a sintaxe, podemos evitar usar as funções anônimas
// e declarar as funções de callback, tal como:

f1(f1CallBack);

function f1CallBack() {
  f2(f2CallBack);
}

function f2CallBack() {
  f3(f3CallBack);
}

function f3CallBack() {
  console.log("Sou o ultimo");
}

// A solução definitiva para esse tipo de problema são as promises, que estão
// explicadas em outro arquivo.
