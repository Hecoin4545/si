const dotenv = require('dotenv')
dotenv.config()

const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET

function setUser(user){
    return jwt.sign({
        _id:user.id,
        email:user.email
    } , SECRET);
}

function getUser(token){
    if(!token) return null;
    try {
        return jwt.verify(token , SECRET)
    } catch (e) {
        return null;
    }
}


module.exports = {
    setUser,
    getUser
}
