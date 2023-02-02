// const disparos = [0, 10, 50, 70, 80, 30]
const disparos = [0, 50, 90, 80, 100, 80, 40]
let contagemAcimaSetenta = 0

for (let disparo of disparos) {
  if(disparo >= 70) {
    contagemAcimaSetenta++
  } 
}
if(contagemAcimaSetenta >= 3) {
  console.log(contagemAcimaSetenta)
} else {
  console.log("ELIMINADO")
}