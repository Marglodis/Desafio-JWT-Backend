const jwt = require("jsonwebtoken");

const signToken = async (user) => {
  
  return jwt.sign(
    {
      email: user.email,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "10m",
    }
  );
};

module.exports = { signToken };
