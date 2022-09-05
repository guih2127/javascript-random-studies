const produto = {
  nome: "Caneca",
  preco: 1.8,
};

// Fazendo assim, nós criamos uma nova variável, mas as duas variáveis
// apontam para o mesmo endereço de memória. Ou seja, se alterarmos uma,
// alteraremos também a outra
const outroProduto = produto;

produto.nome = "Novo produto";

console.log(produto);
console.log(outroProduto);

// com o spread operator conseguimos copiar o valor e alterar apenas ele.
const outraCoisa2 = { ...produto };
outraCoisa2.nome = "Nem sei";
console.log(produto);
console.log(outraCoisa2);

// também podemos fazer isso com o Object.assign()
const caneca = Object.assign({}, produto);
console.log(caneca);

// podemos tambem fazer de uma forma mais manual
const caneca2 = { nome: produto.nome, preco: produto.preco };
console.log(caneca);

// Podemos ver todas as configurações de uma propriedade do objeto
console.log(Object.getOwnPropertyDescriptor(produto, "nome"));

// Podemos pegar todos os valores das propriedades de um objeto
console.log(Object.values(produto));

// Para ler os dois em um array, podemos usar o entries
console.log(Object.entries(produto));
