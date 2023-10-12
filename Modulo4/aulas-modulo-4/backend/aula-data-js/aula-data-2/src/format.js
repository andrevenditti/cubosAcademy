const { format } = require("date-fns");
const ptBr = require("date-fns/locale/pt-BR");

console.log(
  format(new Date(2022, 10, 21), "dd 'de' MMMM 'de' yyyy", {
    locale: ptBr,
  })
);
