const pool = require('../database');

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
    //console.log(payload)
    const consulta = "INSERT INTO usuarios values (DEFAULT, $1, $2, $3, $4)";
    const valores = [email, password, rol, lenguage];
    const resultado = await pool.query(consulta, valores);
    return resultado;
    
};




module.exports = {
    list, create
};
