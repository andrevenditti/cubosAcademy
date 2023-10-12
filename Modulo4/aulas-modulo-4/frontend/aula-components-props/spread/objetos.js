const user = {
  name: "André",
  age: 26,
  stack: "Front-end",
};

const userAddress = {
  city: "Sorocaba",
  state: "São Paulo",
  country: "Brasil",
};

const userData = {
  ...user,
  address: {
    ...userAddress,
  },
};

console.log(userData);
