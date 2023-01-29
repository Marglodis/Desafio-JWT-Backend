const usuariosService = require('../services/usuarios');

const list = async (req, res) => {
  try {
    const usuariosList = await usuariosService.list();
    return res.status(200).send(usuariosList);
  } catch (err) {
    console.error(err);
    res.status(500).send([]);
  }
};

const findOne = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await usuariosService.findOne(id);
    res.status(200).send(usuario);
  } catch (err) {
    console.error();
    res.status(500).send({});
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

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const usuarioUpdated = await usuariosService.update(payload);
    res.status(200).send(usuarioUpdated);
  } catch (err) {
    console.error(err);
    res.status(500).send({});
  }
};

const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await usuariosService.delete(id);
    res.status(204);
  } catch (err) {
    console.error(err);
    res.status(500);
  }
};

module.exports = {
  list,
  findOne,
  create,
  update,
  remove,
};