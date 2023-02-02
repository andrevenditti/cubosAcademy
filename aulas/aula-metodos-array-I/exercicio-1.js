function inverterFrase(frase) {
	// for (let i = frase.length - 1; i >= 0; i--) {
	// 	novaFrase += frase[i];
	// }
	const arrayDeLetras = frase.split("").reverse();
	let novaFrase = "";
	for (let letra of arrayDeLetras) {
		novaFrase += letra;
	}
	return console.log(novaFrase);
}
const frase = "Salve Salve";

inverterFrase(frase);
