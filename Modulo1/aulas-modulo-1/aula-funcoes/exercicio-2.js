function determinarIdade(idade) {
	if (idade <= 21) {
		return "jovem";
	} else if (idade < 65) {
		return "adulto";
	} else {
		return "idoso";
	}
}

const valorDaFuncao = determinarIdade(16);
console.log(valorDaFuncao);
