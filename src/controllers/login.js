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
 if(checkPassword){
    console.log("Password OK")
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: 20 }) 
        res.send(token)
    /* res.send({
        data:user[0].email,tokenSession
    }) */
 }
  else {
          return next(new ErrorResponse("Las credenciales son incorrectas", 400));
        }  
  
        /* const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: 20 }) // Cambiar el "az_AZ" por JWT_SECRET , varianle sd entorno
        res.send(token) */
        //const tokenSession = await tokenSign(user)
    } catch (error) {
        console.log(error)
        res.status(error.code || 500).send(error)
    }
  };

  module.exports = {
       login
  };