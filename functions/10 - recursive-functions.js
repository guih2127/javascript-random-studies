// Funções recursivas
// Podemos chamar a própria função com esse conceito.
// A recursividade tem um limite, então pra isso definimos um limitador
// para ela.

function recursiva(max) {
  console.log(max);
  max++;
  if (max > 10) return;
  else recursiva(max);
}

recursiva(0);
