function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo <= valor) {
    this.verSaldo();
    return;
  }

  this.saldo -= valor;
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  return this.saldo;
};

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

// Implementando a herança, ContaCorrente herda de Conta
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

// Podemos utilizar do polimorfismo, fazendo um metódo se comportar de forma
// diferente em uma classe filha de um pai.
ContaCorrente.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    console.log("Saldo insuficiente");
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

const conta = new Conta(11, 22, 10);
conta.depositar(10);
conta.sacar(10);
console.log(conta);

const contaCorrente = new ContaCorrente(10, 10, 20, 100);
contaCorrente.depositar(10);
contaCorrente.sacar(10000);
console.log(contaCorrente);
