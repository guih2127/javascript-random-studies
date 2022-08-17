function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo, cb) {
  setTimeout(() => {
    console.log(msg);

    if (cb) cb();
  }, tempo);
}

esperaAi("frase 1", rand(1, 3));
esperaAi("frase 2", rand(1, 3));
esperaAi("frase 3", rand(1, 3));

// A ordem que as mensagens aparecem na tela é aleatória. Isso acontece porque
// como passamos números aleatórios para a função, e como elas executam ao mesmo tempo,
// e não uma por vez, a ordem que a execução termina é diferente.
// Poderiamos resolver isso passando CALLBACKS para as funções, ou seja, passando
// funções como parametros e as executando dentro umas das outras.

esperaAi("frase 1", rand(1, 3), function () {
  esperaAi("frase 2", rand(1, 3), function () {
    esperaAi("frase 3", rand(1, 3));
  });
});

// O modo certo seria utilizar Promises. Em funções que sabemos que irão demorar
// um pouco para executar, devemos utilizar as promises

function esperaAiComPromise(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject(false);
      return;
    } // OBS - PARA PARARMOS A EXECUÇÃO DA PROMISE COM O REJECT, PRECISAMOS DO RETURN
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

// esperaAiComPromise("Frase 1", rand(1, 3))
//   .then((resposta) => {
//     console.log(resposta);
//     return esperaAiComPromise("Frase 2", rand(1, 3));
//   })
//   .then((resposta) => {
//     console.log(resposta);
//     return esperaAiComPromise("Frase 3", rand(1, 3));
//   })
//   .then((resposta) => {
//     console.log(resposta);
//   })
//   .catch();

// Trabalhando dessa forma, criamos functions que retornam PROMISES. Chamamos o
// construtor de promises, que também é uma função, e recebe um RESOLVE e um REJECT.
// Podemos chamar a função resolve para retornar um valor desejado no caso de sucesso e,
// no caso de erro, poderemos atribuir um valor que será pego pelo reject.
// Assim, podemos encadear as funções com o THEN e o CATCH. O then será executado caso
// a função entre em seu resolve, o CATCH será executado caso ela entre em seu reject.

// Se quisermos resolver várias promessas de uma vez, sem com que os valores sejam dependentes
// um dos outros, podemos utilizar o Promise.all() para resolver todas as promessas de uma vez.
// Se QUALQUER uma das promessas passar por um erro, o Promise.all() retornará APENAS O ERRO.
const promises = [
  esperaAiComPromise("Promise 1", 3000),
  esperaAiComPromise("Promise 2", 500),
  esperaAiComPromise("Promise 3", 1000),
];

Promise.all(promises)
  .then((valor) => console.log(valor))
  .catch((error) => console.log(error));

// Com o promisse.race, ele retorna a primeira promessa que for resolvida
Promise.race(promises)
  .then((valor) => console.log(valor))
  .catch((error) => console.log(error));

// Com o promise.resolve() podemos entregar uma promessa JÁ RESOLVIDA
// Com o promise.reject() podemos entregar uma promesssa JÁ REJEITADA
function baixaPagina() {
  const emCache = false;

  if (emCache) {
    return Promise.resolve("Pagina em cache");
  } else {
    return esperaAiComPromise("Baixei a pagina", 3000);
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log(e));
