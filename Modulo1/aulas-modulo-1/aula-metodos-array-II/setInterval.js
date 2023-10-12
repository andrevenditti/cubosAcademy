// const imprimir = () => {
// 	console.log("segundo");
// 	clearInterval(intervalo)
// }

// const intervalo = setInterval(imprimir, 2000)

let number = 10

const contador = setInterval(() => {
	console.log(number)
	number--
	if (number === 0) {
		console.log("kbum")
		clearInterval(contador)
	}
}, 1000)