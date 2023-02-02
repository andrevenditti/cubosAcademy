function replaceAll(text, arg1, arg2) {
	while (text !== text.replace(arg1, arg2)) {
		text = text.replace(arg1, arg2);
	}
	return text;
}

let numero = "1,350,000,000,000,000";

replaceAll(numero, ",", ".");

console.log(replaceAll(numero, ",", "."));
