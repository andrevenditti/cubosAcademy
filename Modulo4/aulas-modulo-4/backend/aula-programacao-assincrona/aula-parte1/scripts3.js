const { getCityFromZipcode, getStateFromZipcode } = require("utils-playground");

(async function () {
  const city = await getCityFromZipcode("18060120");
  console.log(city);

  const state = await getStateFromZipcode("18060120");
  console.log(state);
})();
