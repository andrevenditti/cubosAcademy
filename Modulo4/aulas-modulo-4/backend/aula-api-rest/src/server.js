const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());

app.use(routes);

app.listen(
  {
    port: 3000,
  },
  () => {
    console.log(`🏦 server online localhost:3000`);
  }
);
