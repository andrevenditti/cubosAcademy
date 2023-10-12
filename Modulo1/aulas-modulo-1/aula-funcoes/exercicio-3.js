function determinarFaixaEtaria(idade) {
	if (idade <= 21) {
		return "jovem";
	} else if (idade < 66) {
		return "adult(o/a)";
	} else {
		return "idos(o/a)";
	}
}

function apresentacao({ nome, idade, profissao }) {
	const faixaEtaria = determinarFaixaEtaria(idade);
	return `Meu nome e ${nome}, sou um(a) ${faixaEtaria} de  ${idade} anos e sou ${profissao}`;
}

const pessoa = {
	nome: "Andre",
	idade: 14,
	profissao: "estudante",
};

const pessoa2 = {
	nome: "Joana",
	idade: 26,
	profissao: "programador",
};

const pessoa3 = {
	nome: "Dovaldo",
	idade: 66,
	profissao: "aposentado",
};

console.log(apresentacao(pessoa));
console.log(apresentacao(pessoa2));
console.log(apresentacao(pessoa3));
