const fs = require("fs/promises");
const products = require("../database/products");

function getProducts(req, res) {
  return res.status(200).json(products);
}

async function createNewSale(req, res) {
  const { product_id, quantity } = req.body;

  if (!Number(product_id)) {
    return res
      .status(400)
      .json({ message: "Digite um número válido para o produto" });
  }

  if (!Number(quantity)) {
    return res
      .status(400)
      .json({ message: "Digite um número válido para quantidade" });
  }

  const findProduct = products.find(
    (product) => product.id === Number(product_id)
  );

  if (findProduct.length === 0) {
    return res
      .status(404)
      .json({ message: `Produto de id ${product_id} não encontrado` });
  }

  try {
    const getSales = await fs.readFile("./src/vendas.json");
    const salesObject = JSON.parse(getSales);

    salesObject.sales.push({
      product: findProduct,
      quantity: quantity,
    });

    const salesStringify = JSON.stringify(salesObject);

    await fs.writeFile("./src/vendas.json", salesStringify);
    return res.status(201).json({ message: "Venda registrada com sucesso" });
  } catch (error) {
    return res.status(500).json({ message: `Internal error: ${error}` });
  }
}

module.exports = {
  getProducts,
  createNewSale,
};
