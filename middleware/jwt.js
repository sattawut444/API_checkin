const jwt = require('jsonwebtoken'); 
const dotenv  = require('dotenv')

dotenv.config();
function generateAccessToken(email1) {
  return jwt.sign({email1}, process.env.TOKEN_SECRET ,{ expiresIn: "180s" } );
  
}
module.exports = generateAccessToken;