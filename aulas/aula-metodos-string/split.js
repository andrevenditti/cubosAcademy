function captalizarNome(nome) {
	const arrayDeNomes = nome.split(" ");
	const nomesJuntos = [];
	let nomeFormatado = "";
	for (let nomeArray of arrayDeNomes) {
		let alterarPrimeiraLetra = nomeArray.replace(
			nomeArray[0],
			nomeArray[0].toUpperCase()
		);
		nomesJuntos.push(alterarPrimeiraLetra);
	}
	for (let nomeJunto of nomesJuntos) {
		nomeFormatado += nomeJunto + " ";
	}
	console.log(nomeFormatado.trim());
}

const nome = "andre moraes venditti";
captalizarNome(nome);
