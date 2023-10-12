const carros = [
  { nome: "Gol", marca: "Wolkswagem", ano: 2020, cor: "Vermelha" },
  { nome: "Etios", marca: "Toyota", ano: 2014, cor: "Chumbo" },
  { nome: "Celta", marca: "Chevrolet", ano: 2008, cor: "Prata" },
  { nome: "HB20", marca: "Hyundai", ano: 2020, cor: "Branca" },
];

function encontrarCarro(carros, marca) {
  const resultado = carros.find((carro) => {
    return carro.marca === marca;
  });

  return console.log(
    `O carro ${resultado.nome} da marca ${resultado.marca} e do ano de ${resultado.ano} da cor ${resultado.cor}`
  );
}

encontrarCarro(carros, "Chevrolet");
