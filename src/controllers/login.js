const usuariosService = require("../services/usuarios");
const { comparar } = require("../helper/encriptado");
const { signToken } = require("../helper/generarTokem");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await usuariosService.findOne(email);

    if (!user) {
      res.status(404);
      res.send({ error: "User not found" });
    }

    const checkPassword = await comparar(password, user[0].password);

    if (checkPassword) {
      const token = await signToken(user[0]);

      res.send(token);
    } else {
      return res.status(401).send("Error al intentar login");
    }
  } catch (error) {
    res.status(400).send("Algo va mal");
  }
};

module.exports = {
  login,
};
