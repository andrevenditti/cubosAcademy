const palavra = "pacacatacanapa"
let count = 0

for (let letra of palavra) {
  if(letra === "a") {
    count++
  }
}

console.log(`Existem ${count} letras a em ${palavra}`)

//----------------------------------------------//

for (let i = 10; i >= 0; i--) {
  console.log(i)
}

//--------------------------------------------//

for(let i = 2; i <= 50; i++){
  if(i % 2 === 0) {
    console.log(i)
  }
}