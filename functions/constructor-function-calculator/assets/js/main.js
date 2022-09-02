function Calculadora() {
  this.display = document.querySelector(".display");

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  };

  this.capturaCliques = () => {
    document.addEventListener("click", (e) => {
      const element = e.target;
      if (element.classList.contains("btn-num"))
        this.adicionaNumeroNoDisplay(element);
      if (element.classList.contains("btn-clear")) this.clear();
      if (element.classList.contains("btn-del")) this.del(element);
      if (element.classList.contains("btn-eq")) this.realizaConta();
    });
  };

  this.capturaEnter = () => {
    document.addEventListener("keyup", (e) => {
      if (e.keyCode !== 13) return;
      this.realizaConta();
    });
  };

  this.clear = () => {
    this.display.value = "";
  };

  this.adicionaNumeroNoDisplay = (element) => {
    this.display.value += element.innerText;
    this.display.focus();
  };

  this.del = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);

      if (!conta) {
        alert("Conta inválido");
      }

      this.display.value = conta;
    } catch (e) {
      alert("Conta inválida");
      return;
    }
  };
}

const calculadora = new Calculadora();
calculadora.inicia();
