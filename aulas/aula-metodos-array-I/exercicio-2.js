function inverterFrase(frase) {
	const arrayDeLetras = frase.split("").reverse();
	let novaFrase = arrayDeLetras.join("");

	return console.log(novaFrase);
}
const frase = "Salve Salve";

inverterFrase(frase);
