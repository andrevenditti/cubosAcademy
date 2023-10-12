const cars = require("../db");

function filterCars(req, res) {
  const { marca, cor } = req.query;
  let result = cars;

  if (cor) {
    result = cars.filter((car) => {
      return car.cor === cor;
    });
  }

  if (marca) {
    result = cars.filter((car) => {
      return car.marca === marca;
    });
  }

  res.send(result);
}

function findCar(req, res) {
  const { id } = req.params;
  const findCar = cars.find((car) => {
    return car.id === Number(id);
  });
  res.send(findCar);
}
module.exports = {
  filterCars,
  findCar,
};
