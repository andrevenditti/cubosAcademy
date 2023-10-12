const express = require("express");
const app = express();

app.use(express.json());

const { getProducts, createNewSale } = require("../controllers/vendas");

app.get("/produtos", getProducts);
app.post("/produtos", createNewSale);

app.listen(
  {
    port: 3333,
  },
  () => {
    console.log(`🏦 server online localhost:3333`);
  }
);
