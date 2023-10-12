const primeiroSemestre = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"];

const [janeiro, fevereiro, ...rest] = primeiroSemestre;

console.log(rest); //[ 'Mar', 'Abr', 'Mai', 'Jun' ]
