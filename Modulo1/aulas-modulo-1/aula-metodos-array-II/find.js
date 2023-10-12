const usuarios = [
  {
    nome: "Andre",
    idade: 26,
  },
  {
    nome: "Jamelao",
    idade: 23,
  },
  {
    nome: "Amanda",
    idade: 25,
  },
  {
    nome: "Roberto",
    idade: 21,
  },
];

const resultado = usuarios.find(({ nome }) => {
  return nome === "Andre";
});

console.log(resultado); //{nome: "Andre",idade: 26}
