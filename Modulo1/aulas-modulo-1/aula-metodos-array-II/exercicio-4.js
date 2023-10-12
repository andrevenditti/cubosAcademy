const professores = [
  { nome: "Guido", stack: "backend" },
  { nome: "Mantega", stack: "frontend" },
  { nome: "Jamelao", stack: "backend" },
  { nome: "Diogo", stack: "frontend" },
  { nome: "Nogueira", stack: "backend" },
];

const professoresBackend = professores.filter((professor) => {
  return professor.stack === "backend";
});
const professoresFrontend = professores.filter((professor) => {
  return professor.stack === "frontend";
});

console.log(professoresBackend);
console.log(professoresFrontend);
