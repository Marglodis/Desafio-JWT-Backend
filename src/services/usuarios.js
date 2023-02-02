const pool = require('../database');
const bcrypt = require('bcrypt');
const { encriptar, comparar } = require('../helper/encriptado');

const list = async () => {
    try {
        const consulta = "SELECT * FROM usuarios";
        const { rows: usuarios } = await pool.query(consulta)
        return usuarios;
    } catch (error) {
        console.error("hubo un error al obtener los usuarios ", error);
        return [];
    }
};

const create = async ({email, password,rol,lenguage}) => {
        
    const passwordEncriptada = await encriptar(password);
    const consulta = "INSERT INTO usuarios values (DEFAULT, $1, $2, $3, $4)";
    const valores = [email, passwordEncriptada, rol, lenguage];
    const resultado = await pool.query(consulta, valores);
    return resultado;
    
};

const verificarCredenciales = async (email, password) => {
    console.log("Entrando a VErificar Credenciales")
    const values = [email]
    const consulta = "SELECT * FROM usuarios WHERE email = $1"
    const { rows, rowCount } = await pool.query(consulta, values)
    
    const passwordEncriptada = rows[0].password
    console.log(passwordEncriptada)
    console.log(password)
    const passwordEsCorrecta = await comparar(password, passwordEncriptada)
    console.log(passwordEsCorrecta)
    if (!passwordEsCorrecta || !rowCount)
    throw { code: 401, message: "Email o contraseña incorrecta" }
    }

    const findOne = async (email) => {
        const values = [email]
        const consulta = "SELECT * FROM usuarios WHERE email = $1"
        const { rows } = await pool.query(consulta, values)
        console.log("Estoy en findONe SERVICES,",rows)

         return rows
    }    

 
module.exports = {
    list, create, verificarCredenciales, findOne
};
