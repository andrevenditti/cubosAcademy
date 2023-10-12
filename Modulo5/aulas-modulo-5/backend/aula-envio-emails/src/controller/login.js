const transport = require("../email");
const compiladorHtml = require("../utils/compiladorHtml");

const user = {
  nome: "André",
  email: "dehmoraes7@gmail.com",
  senha: "123deoliveira4",
};

const login = async (req, res) => {
  const { email, senha } = req.body;

  if (user.email !== email) {
    return res.status(400).json({ mensagem: "Email ou senha inválidos" });
  }

  if (user.senha !== senha) {
    return res.status(400).json({ mensagem: "Email ou senha inválidos" });
  }

  //envio de email

  const html = await compiladorHtml("./src/templates/login.html", {
    nomeusuario: user.nome,
  });

  transport.sendMail({
    from: "André <am7venditti@gmail.com>",
    to: `${user.nome} <${user.email}>`,
    subject: "Tentativa de login",
    html,
  });

  return res.json({ mensagem: "Login efetuado com sucesso" });
};

module.exports = login;
