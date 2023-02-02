const bcrypt = require('bcrypt');

const encriptar = async(textPlano)=>{
    const hash = await bcrypt.hash(textPlano,10)
    return hash;
}

const comparar = async(passwordPlano,hashPassword)=>{
    return await bcrypt.compare(passwordPlano,hashPassword)
}

module.exports={encriptar,comparar}