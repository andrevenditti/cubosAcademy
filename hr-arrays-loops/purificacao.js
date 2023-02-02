function solucao(stringCorrompida) {
  let newFrase = ""

  for(let i = 0; i < stringCorrompida.length; i++) {
    if(stringCorrompida[i] === "!" || stringCorrompida[i] === "@" || stringCorrompida[i] === "#" || stringCorrompida[i] === "$" || stringCorrompida[i] === "%" || stringCorrompida[i] === "&" || stringCorrompida[i] === "*" || stringCorrompida[i] === "(" || stringCorrompida[i] === ")" ) {
      stringCorrompida[i] = ""
    } else {
      newFrase += stringCorrompida[i]
    }
  }
  console.log(newFrase)
}

solucao("$Ailuropoda@ melanoleuca!")