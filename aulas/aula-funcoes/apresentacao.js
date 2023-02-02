const pessoa = {
	nome: "Andre",
	idade: 66,
	profissao: "programador",
};

const { nome, idade, profissao } = pessoa;

if (idade < 18) {
	console.log(
		`Meu nome e ${nome}, sou um(a) jovem de  ${idade} anos e sou ${profissao}`
	);
} else if (idade < 65) {
	console.log(
		`Meu nome e ${nome}, sou um adulto de ${idade} anos e sou ${profissao}`
	);
} else {
	console.log(
		`Meu nome e ${nome}, sou um idoso de ${idade} anos e sou ${profissao}`
	);
}
