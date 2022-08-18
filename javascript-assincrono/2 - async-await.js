function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAiComPromise(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") {
      reject(false);
      return;
    }
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAiComPromise("Fase 1", rand()).then((valor) => {
  console.log(valor);
  return esperaAiComPromise("Fase 2", rand())
    .then((fase) => {
      console.log(fase);
      return esperaAiComPromise("Fase 3", rand());
    })
    .then((fase) => console.log(fase))
    .catch((e) => console.log(e));
});

// Ainda assim, ficar encadeando .then() e .catch() fica extremamente cansativo.
// Podemos utilizar as palavras ASYNC e AWAIT. Quando declaramos uma função como
// ASYNC, podemos utilizar dentro dela as palavras AWAIT, antes de cada função
// que a gente queira que o código espere por sua finalização.

async function executa() {
  try {
    const fase1 = await esperaAiComPromise("Fase 1", rand());
    console.log(fase1);
    const fase2 = await esperaAiComPromise(2, rand());
    console.log(fase2);
    const fase3 = await esperaAiComPromise("Fase 3", rand());
    console.log(fase3);
  } catch (e) {
    console.log(e);
  }
}

executa();

// É importante citar que as PROMISES no javascript tem algumas fases, sendo elas:
// 1 - PENDING (pendente)
// Quando a promise ainda não acabou de executar, ela está como pendente. Se chamamos
// uma função que retorna uma promise sem utilizar o await ou um .then(), ela ficará nesse
// pois não informamos que queremos esperar aquele valor.
// 2 - FULLFILLED -> Uma promise resolvida.
// 3 - REJECTED -> Uma promise rejeitada.
