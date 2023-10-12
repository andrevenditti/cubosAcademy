function captalizarNome(nome) {
	const arrayDeNomes = nome.split(" ");
	let nomeFormatado = "";
	for (let nomeArray of arrayDeNomes) {
		let primeiraLetraAlterada = nomeArray.slice(0, 1).toUpperCase();
		let restanteDoNome = nomeArray.slice(1);

		nomeFormatado = primeiraLetraAlterada + restanteDoNome + " ";
	}
	console.log(nomeFormatado.trim());
}

const nome = "andre moraes venditti";
captalizarNome(nome);
