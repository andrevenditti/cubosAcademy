const handlebars = require("handlebars");
const fs = require("fs/promises");

const compiladorHtml = async (arquivo, context) => {
  const file = await fs.readFile(arquivo);

  const compiler = handlebars.compile(file.toString());

  const htmlString = compiler(context);

  return htmlString;
};

module.exports = compiladorHtml;
