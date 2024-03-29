const { add } = require("date-fns");

const date = new Date(2014, 8, 1, 10, 19, 50);

const result = add(date, {
  years: 2,
  months: 9,
  weeks: 1,
  days: 7,
  hours: 5,
  minutes: 9,
  seconds: 30,
});

console.log(date);
console.log(result);
