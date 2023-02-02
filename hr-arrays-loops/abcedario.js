function solucao(letra, palavras) {
  let count = 0

  for (let palavra of palavras) {
    if(palavra[0] !== letra) {
      count++
    }
  }
  console.log(count)
}

solucao("m", ["mamao","maca","melao","melancia","laranja"])