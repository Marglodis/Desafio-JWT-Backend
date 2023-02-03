const usuariosService = require("../services/usuarios");

const findOne = async (req, res) => {
  try {
    const { email } = req.params;
    const usuario = await usuariosService.findOne(email);
    res.status(200).send(usuario);
  } catch (err) {
    console.error();
    res.status(500).send({});
  }
};

const mostrarUsuario = (req, res) => {
  try {
    const { usuario } = req;
    res.json(usuario);
  } catch (e) {
    console.log(e);
  }
};

const create = async (req, res) => {
  try {
    const payload = req.body;
    const usuarioCreated = await usuariosService.create(payload);
    res.status(200).send(usuarioCreated);
  } catch (err) {
    console.error(err);
    res.status(500).send({});
  }
};

module.exports = {
  mostrarUsuario,
  findOne,
  create,
};
