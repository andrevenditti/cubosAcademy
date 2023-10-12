const express = require("express");
const app = express();
const fs = require("fs/promises");

app.use(express.json());

app.get("/", async (req, res) => {
  const string = "tudo fine";
  await fs.writeFile("./src/a.txt", string);
  res.json("ok");
});

app.post("/", async (req, res) => {
  const { nome, idade } = req.body;

  try {
    const getUsers = await fs.readFile("./src/users.json");
    const users = JSON.parse(getUsers);

    users.push({
      nome,
      idade,
    });

    const pessoasStringify = JSON.stringify(users);

    await fs.writeFile("./src/users.json", pessoasStringify);
    return res.json("cria");
  } catch (error) {
    return res.json(`Errou de novo: ${error.message}`);
  } finally {
    console.log("dale dale");
  }
});

app.listen(
  {
    port: 3333,
  },
  () => {
    console.log("server on");
  }
);
