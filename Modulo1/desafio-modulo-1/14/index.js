function processData(input) {
  //Enter your code here
  //codigo certo
  let linhas = input.trim().split("\n");
  const senha = linhas[0].split("");
  let senhaDigitada = linhas[1].split("");
  let senhaFormada = [];

  for (let i = 0; i < senha.length; i++) {
    // for (let j = 0; j < senhaDigitada.length; j++) {
    //   if (senhaDigitada[j] === senha[i]) {
    //     senhaFormada += senhaDigitada[j];
    //     senhaDigitada = senhaDigitada.slice(j);
    //   }
    //}
    let x = senhaDigitada.indexOf(senha[i]);
    if (x !== -1) {
      senhaFormada.push(senha[i]);
      senhaDigitada = senhaDigitada.slice(x);
    }
  }

  if (senhaFormada.join("") === senha.join("")) {
    console.log("SIM");
  } else {
    console.log("NAO");
  }
}

processData("cubos cuggbyos");

// processData(`cubos
// ewvelrabsocaeln`);

// processData(`cubos
// uewvelrabsoscaeln`);
