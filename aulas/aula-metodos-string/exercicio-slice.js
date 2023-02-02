//Obter apenas os dois digitos do estado de uma cidade
//minha solucao
const cidade = "Salvador-BA";
let digitosEstado = cidade.slice(-2);

console.log(digitosEstado);

//solucao professor
const penultimoIdex = cidade.length - 2;
let estado = cidade.slice(penultimoIdex);
console.log(estado);
