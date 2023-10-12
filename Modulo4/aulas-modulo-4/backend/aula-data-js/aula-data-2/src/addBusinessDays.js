const { addBusinessDays } = require("date-fns");

const result = addBusinessDays(new Date(2022, 8, 1), 10);

console.log(result);
