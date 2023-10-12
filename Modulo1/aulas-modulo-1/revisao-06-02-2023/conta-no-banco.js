//ter pelo menos 18 anos
//ter mandado toda documentacao
//500 < - 500  <= 500 - 699 > score
// CONTA NEGADA - ELSE - LIMITE

function openAccount(idade, ehEmancipada, documentacaoOK, score) {
  if ((idade < 18 && ehEmancipada === false) || documentacaoOK === false) {
    return console.log("CONTA NEGADA");
  }

  if (score > 700) {
    console.log("3000");
  } else if (score < 699 && score >= 500) {
    console.log("1500");
  } else {
    console.log("500");
  }
}

const conta = {
  idade: 16,
  ehEmancipada: true,
  documentacaoOK: true,
  score: 500,
};

const { idade, ehEmancipada, documentacaoOK, score } = conta;

openAccount(idade, ehEmancipada, documentacaoOK, score);
