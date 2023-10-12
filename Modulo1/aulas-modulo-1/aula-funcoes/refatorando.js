function apresentacao({ nome, idade, profissao }) {
	if (idade < 21) {
		return `Meu nome e ${nome}, sou um(a) jovem de  ${idade} anos e sou ${profissao}`;
	} else if (idade < 65) {
		return `Meu nome e ${nome}, sou um(a) adult(o/a) de ${idade} anos e sou ${profissao}`;
	} else {
		return `Meu nome e ${nome}, sou um(a) idos(o/a) de ${idade} anos e sou ${profissao}`;
	}
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
