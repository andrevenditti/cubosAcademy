const palpite = "a"
const palavra = "abelha"
let count = 0

for (let letra of palavra) {
  if(palpite === letra) {
    count++
  }
}

console.log(count)