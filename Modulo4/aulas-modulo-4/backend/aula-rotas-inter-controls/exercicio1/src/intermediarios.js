function passwordMiddleware(req, res, next) {
  const { senha } = req.query;

  if (!senha) {
    return res.status(403).send("Precisa de senha");
  }

  if (senha !== "123") {
    return res.status(403).send("Senha incorreta");
  }

  next();
}

module.exports = {
  passwordMiddleware,
};
