const carros = [
  { nome: "Gol", marca: "Wolkswagem", ano: 2020, cor: "Vermelha" },
  { nome: "Etios", marca: "Toyota", ano: 2014, cor: "Chumbo" },
  { nome: "Celta", marca: "Chevrolet", ano: 2008, cor: "Prata" },
  { nome: "HB20", marca: "Hyundai", ano: 2020, cor: "Branca" },
];

const resultado = carros.findIndex((carro) => {
  return carro.marca === "Hyundai";
});

console.log(resultado);
