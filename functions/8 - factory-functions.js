// Factory Functions
// Funções de fábrica são basicamente funções que criam objetos.
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    // GETTER
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    // SETTER
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor;
      console.log(valor);
    },
    altura: altura,
    peso: peso,
    fala(assunto) {
      return `${this.nome} está falando sobre ${assunto}.`;
    },
    // Usando a sintaxe get, podemos fazer com que um metódo da classe
    // seja, na verdade, um atributo da classe.
    // estamos criando um "getter", pois queremos apenas obter o valor
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}

const p1 = criaPessoa("Guilherme", "Reis", 1.85, 88);
console.log(p1);
console.log(p1.fala("Futebol"));
console.log(p1.imc);

// Ao atribuirmos dessa forma, cairemos no SETTER de nomeCompleto
p1.nomeCompleto = "GUILHERME REIS ARAUJO";
console.log(p1.nomeCompleto);

// THIS -> O This sempre assume o valor de quem está chamando o objeto.
// Por exemplo, nesse caso, o this vai ser o p1, que é quem está chamando
// a criaPessoa(). Então, utilizando o this, podemos acessar as propriedades
// do "pai" da funcão.
