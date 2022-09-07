const pessoas = [
  { id: 3, nome: "Nome 1" },
  { id: 2, nome: "Nome 2" },
  { id: 1, nome: "Nome 4" },
];

const novasPessoas = new Map();

// Com o map, também temos um objeto de chave valor, mas ele é diferente.
// Conseguimos manter a chave como um number e sem alterar a ordem.
for (const pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}

console.log(novasPessoas);
console.log(novasPessoas.get(2));
