function processData(input) {
  //Enter your code here
  const firstLetter = input[0];
  const restoFrase = input.slice(1);
  let fraseFinal = "";
  if (
    firstLetter.toLowerCase() === input[0] &&
    restoFrase.toUpperCase() === restoFrase
  ) {
    fraseFinal = firstLetter.toUpperCase() + restoFrase.toLowerCase();
  } else if (input.toUpperCase() === input) {
    fraseFinal = input.toLowerCase();
  } else {
    fraseFinal = input;
  }
  console.log(fraseFinal);
}

const frase1 = "cAPS";
const frase2 = "lock";
const frase3 = "CAPS";

processData(frase1);
processData(frase2);
processData(frase3);
