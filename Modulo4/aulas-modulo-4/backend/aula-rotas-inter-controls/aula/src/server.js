const express = require("express");
const { findTeacher, filterTeachers } = require("./controladores/professores");

const app = express();

const firstMiddleware = (req, res, next) => {
  console.log("Passei no 1 middleware");
  next();
};

const secondMiddleware = (req, res, next) => {
  console.log("Passei no 2 middleware");
  next();
};

const routeMiddleware = (req, res, next) => {
  console.log("passei no middleware da rota");
  next();
};

// app.use(firstMiddleware);
// app.use(secondMiddleware);

app.get("/", (req, res) => {
  res.send("Cubos Academy");
});

app.get("/professores", routeMiddleware, filterTeachers);

app.get("/professores/:id", findTeacher);

app.listen(
  {
    port: 3333,
  },
  () => {
    console.log("🧊 http server running on http://localhost:3333");
  }
);
