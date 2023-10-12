function detectarVirus(arquivos) {
  // const resultado = arquivos.some((arquivo) => {
  //   return arquivo.slice(arquivo.indexOf(".")) === ".bat";
  // });
  const resultado = arquivos.some((arquivo) => {
    const existeExtensao = arquivo.indexOf(".bat");
    return existeExtensao !== -1;
  });

  if (resultado) {
    console.log("virus detectado");
  } else {
    console.log("nenhum virus encontrado");
  }
}

const arquivos = ["sdasd.jpg", "tocatins.jpeg", "tacaca.txt", "tucupi.png"];

detectarVirus(arquivos);
