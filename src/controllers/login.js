const usuariosService = require('../services/usuarios');
const jwt = require("jsonwebtoken");
const { comparar } = require('../helper/encriptado');

const login = async (req, res,next) => {
    console.log("Entrando al login del controler")
    try {
        const { email, password } = req.body

        const user = await usuariosService.findOne(email)
 
if(!user){
    res.status(404)
    res.send({error: "User not found"})
}
 //   await usuariosService.verificarCredenciales(email, password)
 
 const checkPassword = await comparar(password,user[0].password)  
 console.log("checkPAssword", checkPassword)
 if(checkPassword){
    console.log("Password OK")
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: 20 }) 
        res.send(token)
    /* res.send({
        data:user[0].email,tokenSession
    }) */
 }
  else {
    console.log("Esta es la respuesat del NEXT")
          return  res.status(error.code || 500).send(error)
        }  
  
        /* const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: 20 }) // Cambiar el "az_AZ" por JWT_SECRET , varianle sd entorno
        res.send(token) */
        //const tokenSession = await tokenSign(user)
    } catch (error) {

        console.log("Esta es la respuesat del catch",error)
        res.status(error.code || 500).send(error)
    }
  };

  module.exports = {
       login
  };