const fs = require("fs/promises");

console.log("antes de ler");

// const a = fs.readFile("a.txt");

// a.then((data) => {
//   console.log(data.toString());
// });

// a.catch((err) => {
//   console.log(err);
// });

(async function () {
  const a = await fs.readFile("a.txt");
  console.log(a.toString());
})();

console.log("depois de ler");
