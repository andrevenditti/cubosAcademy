const sequencia = ">><<<><<<<>"
let count = 0

for(let i = 0; i < sequencia.length; i++) {
  if(count === 0 && sequencia[i] === "<"){
    count = 6
  } else if(count === 6 && sequencia[i] === ">"){
    count = 0
  }
  else if(sequencia[i] === ">") {
    count++
  } else if(sequencia[i] === "<") {
    count--
  }
}
console.log(count)