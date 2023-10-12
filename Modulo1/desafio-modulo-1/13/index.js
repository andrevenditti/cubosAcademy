function processData(input) {
  //Enter your code here
  const linhas = input.split("\n");
  let distanciaAtual = 0;
  let distanciaFinal = 0;
  const numeroFuncionario = parseInt(linhas[0], 10);
  let coordenadas = [];

  //transformando array
  for (let i = 1; i < linhas.length; i++) {
    const coord = linhas[i].split(" ");
    coordenadas.push({
      x: parseFloat(coord[0], 10),
      y: parseFloat(coord[1], 10),
    });
  }

  for (let i = 0; i < numeroFuncionario; i++) {
    for (let j = 0; j < numeroFuncionario; j++) {
      distanciaAtual = Math.sqrt(
        (coordenadas[i].x - coordenadas[j].x) ** 2 +
          (coordenadas[i].y - coordenadas[j].y) ** 2
      );
      if (distanciaAtual > distanciaFinal) {
        distanciaFinal = distanciaAtual;
      }
    }
  }
  console.log(distanciaFinal);
}

processData(`3
0 0
0 3
4 0`);

processData(`5
3.56 17
-5.1 36.3
0.0002 -2
5 5
-9.01 -17.7`);
