function solucao(numero, limiteInferior, limiteSuperior) {
  if (limiteInferior > limiteSuperior) {
    return;
  }
  if (numero >= limiteInferior && numero <= limiteSuperior) {
    console.log("PERTENCE");
  } else {
    console.log("NAO PERTENCE");
  }
}

solucao(10, 5, 20);
