function criaCalculadora() {
  return {
    display: document.querySelector(".display"),
    brnClear: document.querySelector(".btn-clear"),
    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },
    pressionaEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },
    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);

        if (!conta) {
          alert("Conta inválida");
          return;
        }

        this.display.value = conta;
      } catch (e) {
        alert("Conta inválida");
        return;
      }
    },
    clearDisplay() {
      this.display.value = "";
    },
    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },
    cliqueBotoes() {
      document.addEventListener(
        "click",
        function (e) {
          const element = e.target;

          if (element.classList.contains("btn-num")) {
            this.btnParaDisplay(element.innerText);
          }

          if (element.classList.contains("btn-clear")) {
            this.clearDisplay();
          }

          if (element.classList.contains("btn-del")) {
            this.apagaUm();
          }

          if (element.classList.contains("btn-eq")) {
            this.realizaConta();
          }
        }.bind(this)
        // com o .bind, conseguimos mudar o this original da função.
        // dentro do nosso documents.addeventListener, passamos uma função
        // e, dentro dela, perdiamos o contexto do this, pois o this se
        // tornava o document. para resolver isso, usamos o bind, dizendo
        // para ela que o this que queremos ter nesse escopo é o this
        // da calculadora
        // podemos tambem troca-la para uma arrow function, pois a arrow function
        // nós sempre teremos o this "travado" em quem criou o elemento, ou seja,
        // não alteraremos o contexto do this.
      );
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
