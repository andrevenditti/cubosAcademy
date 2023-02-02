const pessoa = {
	nome: "Andre",
	idade: 34,
	profissao: "estudante",
	determinarFaixaEtaria: function () {
		if (this.idade <= 21) {
			return "jovem";
		} else if (this.idade < 66) {
			return "adult(o/a)";
		} else {
			return "idos(o/a)";
		}
	},
	apresentacao: function () {
		const faixaEtaria = this.determinarFaixaEtaria();
		console.log(
			`Meu nome e ${this.nome}, sou um(a) ${faixaEtaria} de ${this.idade} anos e sou ${this.profissao}`
		);
	},
};

pessoa.apresentacao();
