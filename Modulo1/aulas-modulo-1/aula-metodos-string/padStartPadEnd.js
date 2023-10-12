function imprimirData(dia, mes, ano) {
	let diaCorrigido = dia.toString().padStart(2, "0");
	let mesCorrigido = mes.toString().padStart(2, "0");
	console.log(`${diaCorrigido}/${mesCorrigido}/${ano}`);
}

const dia = 01;
const mes = 01;
const ano = 2021;

const dia2 = 18;
const mes2 = 02;
const ano2 = 1991;

imprimirData(dia, mes, ano);
imprimirData(dia2, mes2, ano2);
