//slice nao modifica o array, ele cria uma copia
const opcoes = ["Eu", "Tu", "Nois", "Vois", "Eles"];

const resultado = opcoes.slice(0, 3);

console.log(resultado); // ["Eu","Tu","Nois"]
