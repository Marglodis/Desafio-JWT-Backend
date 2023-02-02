const jwt = require(jsonwebtoken);

const signToken = async(user)=>{
return jwt.sign({
    email:user.email,
    rol:user.rol
},process.env.JWT_SECRET,
{
    expiresIn:20
});

}

const  verifyToken = async(token)=>{

}

const decoSign = async(token)=>{

}

module.exports = {signToken,verifyToken,decoSign}