const haveTicket = true;
const age = 15
const censorship = 16

if(haveTicket) {
  if (age >= censorship) {
    console.log("pode filmolar")
  } else {
    console.log("não pode ver filminho, a idade não permite")
  } 
} else {
  console.log("não pode ver filminho, não tem ingresso")
} 