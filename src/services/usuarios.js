const pool = require("../database");

const { encriptar } = require("../helper/encriptado");

const create = async ({ email, password, rol, lenguage }) => {
  const passwordEncriptada = await encriptar(password);
  const consulta = "INSERT INTO usuarios values (DEFAULT, $1, $2, $3, $4)";
  const valores = [email, passwordEncriptada, rol, lenguage];
  const resultado = await pool.query(consulta, valores);
  return resultado;
};


const findOne = async (email) => {
  const values = [email];
  const consulta = "SELECT * FROM usuarios WHERE email = $1";
  const { rows } = await pool.query(consulta, values);
  
  return rows;
};

module.exports = {
    create,
    findOne,
};
