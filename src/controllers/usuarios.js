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
    const { email } = req.params;
    /* const Authorization = req.header("Authorization")
  const token = Authorization.split("Bearer ")[1]
  jwt.verify(token, process.env.JWT_SECRET) */
  //const { email } = jwt.verify(token)
  const usuario = await usuariosService.findOne(email);
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


module.exports = {
  list,
  findOne,
  create,
};