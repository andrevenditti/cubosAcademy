const { filterCars, findCar } = require("./controladores/carros");
const { passwordMiddleware } = require("./intermediarios");
const express = require("express");
const app = express();

app.use(passwordMiddleware);

app.get("/cars", filterCars);

app.get("/cars/:id", findCar);

app.listen(
  {
    port: 3333,
  },
  () => {
    console.log("🏚 server rodando");
  }
);
