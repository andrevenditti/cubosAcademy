const pessoas = ["joão", "Maria", "beatriz", "guido"];

//ordenacao crescente
pessoas.sort((a, b) => {
  return a.localeCompare(b);
});

console.log(pessoas);

//ordenacao descrescente
pessoas.sort((a, b) => {
  return b.localeCompare(a);
});

console.log(pessoas);
