const express = require("express");
const app = express();

const {
  getCityFromZipcode,
  getPackageDescriptionNpm,
} = require("utils-playground");

app.get("/", async (req, res) => {
  const city = getCityFromZipcode("44380000");
  const city2 = getCityFromZipcode("18060120");

  const promise = await Promise.all([city, city2]);

  const [res1, res2] = promise;

  res.send(`A cidade encontrada foi: ${res1} e ${res2}`);
});

app.get("/pacote/:nomePacote", async (req, res) => {
  const { nomePacote } = req.params;

  const descriptionPackage = await getPackageDescriptionNpm(nomePacote);

  return res.send(descriptionPackage);
});

app.listen(
  {
    port: 3333,
  },
  () => {
    console.log(`💽 server on`);
  }
);
