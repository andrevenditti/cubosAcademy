const pessoa = {
	nome: "Andre",
	idade: 26,
	profissao: "programador",
	altura: 1.76,
};

// function falarComPessoa(dados) {
// 	if (dados.idade < 18) {
// 		console.log(
// 			`Ola meu nome e ${dados.nome}, sou um jovem de ${dados.idade} anos, ${dados.altura}m de altura e sou ${dados.profissao}`
// 		);
// 	} else if (dados.idade < 65) {
// 		console.log(
// 			`Ola meu nome e ${dados.nome}, sou um adulto de ${dados.idade} anos, ${dados.altura}m de altura e sou ${dados.profissao}`
// 		);
// 	} else {
// 		console.log(
// 			`Ola meu nome e ${dados.nome}, sou um idoso de ${dados.idade} anos, ${dados.altura}m de altura e sou ${dados.profissao}`
// 		);
// 	}
// }

function falarComPessoa({ nome, idade, profissao, altura }) {
	if (idade < 18) {
		console.log(
			`Ola meu nome e ${nome}, sou um jovem de ${idade} anos, ${altura}m de altura e sou ${profissao}`
		);
	} else if (idade < 65) {
		console.log(
			`Ola meu nome e ${nome}, sou um adulto de ${idade} anos, ${altura}m de altura e sou ${profissao}`
		);
	} else {
		console.log(
			`Ola meu nome e ${nome}, sou um idoso de ${idade} anos, ${altura}m de altura e sou ${profissao}`
		);
	}
}

falarComPessoa(pessoa);
