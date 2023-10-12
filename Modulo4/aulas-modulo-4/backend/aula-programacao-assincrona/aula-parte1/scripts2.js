const { getCityFromZipcode, getStateFromZipcode } = require("utils-playground");

// getCityFromZipcode("18060120")
//   .then((city) => {
//     console.log(city);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const cidade = getCityFromZipcode("18060120");

// cidade.then((city) => {
//   console.log(city);
// });

// cidade.catch((error) => console.log(error.message));

// console.log(cidade);

getCityFromZipcode("18060120")
  .then((city) => {
    console.log(city);
  })
  .catch((error) => {
    console.log(error);
  });

getStateFromZipcode("18060120").then((state) => {
  console.log(state);
});
