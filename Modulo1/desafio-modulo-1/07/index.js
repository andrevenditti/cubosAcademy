function solucao(texto) {
  // Seu codigo aqui
  if (texto.length > 5000) {
    return;
  }
  const contagemLetras = texto.trim();
  const arrayDePalavras = contagemLetras.split(" ");
  const arrayDePalavrasFormatado = arrayDePalavras.filter((palavras) => {
    return palavras !== "";
  });
  return console.log(arrayDePalavrasFormatado.length);
}

const texto =
  "Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer ";
const texto2 = "Um texto qualquer";
const texto3 = "O gato roeu    a roupa do    rei de    Roma";

// solucao(texto);
// solucao(texto2);
solucao(texto3);
