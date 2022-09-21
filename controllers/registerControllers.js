const registerServict = require('../service/registerService')
const encode = require('../middleware/encode');
    
    /* REGISTER USER */
exports.registerUser = async ( req, res, next ) => {
    try {
        const model = req.body
        const passwordb = await encode.encryptPassword(model.password)
        model.passwordb = passwordb
        const registerUser = await registerServict.userRegister(model)
        return res.status(200).send({registerUser});
    } catch (error) {
        next(error)
    }
}
    /* REGISTER USER */
exports.registerAdmin = async ( req, res, next ) => {
    try {
        const model = req.body
        const passwordb = await encode.encryptPassword(model.password)
        model.passwordb = passwordb
        const registerAdmin = await registerServict.adminRegister(model)
        return res.status(200).send({registerAdmin})
    } catch (error) {
        next(error)
    }
}
