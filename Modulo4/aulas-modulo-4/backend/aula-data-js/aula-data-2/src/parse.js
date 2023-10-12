const { parse } = require("date-fns");
const ptBr = require("date-fns/locale/pt-BR");

const result = parse("23", "dd", new Date(2012, 0, 1), {
  locale: ptBr,
});

console.log(result);
