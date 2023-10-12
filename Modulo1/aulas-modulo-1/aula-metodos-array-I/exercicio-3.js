function filtrar80(data) {
	// const start = (dataArray.length * 0.1).toFixed(0);
	// const end = (dataArray.length * 0.9).toFixed(0);
	const start = Math.round(data.length * 0.1);
	const end = Math.round(data.length * 0.9);
	const dataArrayFormated = data.slice(start, end);

	return console.log(dataArrayFormated);
}

const dataArray = [
	12, 23, 54, 13, 15, 23, 42, 34, 65, 54, 23, 57, 32, 54, 32, 65, 46, 43,
];

filtrar80(dataArray);
