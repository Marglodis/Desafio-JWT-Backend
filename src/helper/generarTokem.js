const jwt = require("jsonwebtoken");

const signToken = async (user) => {
  console.log("Estoy en el signToken: ", user);
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
