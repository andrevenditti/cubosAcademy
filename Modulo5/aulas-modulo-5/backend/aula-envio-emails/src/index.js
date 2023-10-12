require("dotenv").config();
const express = require("express");
const login = require("./controller/login");
const app = express();

app.use(express.json());

app.post("/login", login);

const port = process.env.PORT || 3000;
app.listen(
  {
    port,
  },
  () => {
    console.log("server on");
  }
);
