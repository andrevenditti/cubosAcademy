const express = require("express")
const app = express();
const users = require("./users")

app.get("/usuarios", (req,res) => {
  res.send(users)
})

app.listen(3000, () => {
  console.log("Server initialized port 3000");
})