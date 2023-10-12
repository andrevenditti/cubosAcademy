// 50 por minuto ate 20min - 30 cents por minuto acima 20min
//70 cents por km ate 10km - 50 centavos por km

function solucao(min, km) {
  //seu codigo aqui
  let valorViagem = 0;
  let kilometroExtra = (km - 10) * 50;
  let minutoExtra = (min - 20) * 30;

  if (kilometroExtra >= 0 && minutoExtra >= 0) {
    valorViagem = 10 * 70 + kilometroExtra + 20 * 50 + minutoExtra;
  } else if (kilometroExtra >= 0) {
    valorViagem = 10 * 70 + kilometroExtra + min * 50;
  } else if (minutoExtra >= 0) {
    valorViagem = km * 70 + 20 * 50 + minutoExtra;
  } else {
    valorViagem = km * 70 + min * 50;
  }
  console.log(valorViagem);
}

solucao(25, 9);
