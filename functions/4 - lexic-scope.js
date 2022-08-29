// Escopo léxico
const nome = "Guilherme";

// De dentro de uma função, podemos acessar variáveis que estão nos vizinhos dela.
// Se a função não achar essa variável dentro de seu escopo, ela irá procurar no pai,
// e se não achar irá procurar no pai do pai, e etc...
// A função conhece tudo que foi declarado dentro dela e nos seus vizinhos. O escopo
// léxico é a junção de todos esses escopos.
function falaNome() {
  console.log(nome);
}

// Nesse caso, o console irá continuar logando Guilherme, pois o escopo léxico
// se refere ao local onde a função foi criada. Ou seja, como criamos
// a função falaNome() fora do escopo de usaFalaNome(), ela irá procurar
// pela variável nome dentro de seu escopo e nos seus parentes.
// Na função usaFalaNome() ela é apenas chamada, e não declarada.
function usaFalaNome() {
  const nome = "Disney";
  falaNome();
}

falaNome();
usaFalaNome();
