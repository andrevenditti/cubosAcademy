const finalCopa = new Date(2002, 5, 30, 8);
const finalMaisUmaHoraTimestamp = +finalCopa + 1000 * 60 * 60;
const finalMaisUmaHoraDate = new Date(finalMaisUmaHoraTimestamp);

console.log(finalCopa);
console.log(finalMaisUmaHoraDate);
