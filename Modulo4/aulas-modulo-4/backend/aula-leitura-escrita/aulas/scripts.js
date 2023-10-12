const fs = require("fs");

console.log("antes de ler");

//leitura de arquivos sincrono
// const a = fs.readFileSync("a.txt").toString();
// console.log(a);

fs.readFile("a.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

console.log("depois de ler");
