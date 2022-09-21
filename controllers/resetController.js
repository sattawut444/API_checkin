const resetServict = require('../service/resetService')
const encode = require('../middleware/encode');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtft = require('../middleware/jwt');
const dayjs = require('dayjs');
    /* RESET PASSWORD */
exports.PasswordResetUser = async (req, res, next) => {
    try {
        const model = req.body
        const passwordb = await encode.encryptPassword(model.password)
        model.passwordb = passwordb
        const reset = await resetServict.ResetPasswordUser(model)
        return res.status(200).send({reset});
    } catch (error) {
        next(error)
    }
}
    /* RESET PASSWORD */
exports.PasswordResetAdmin = async (req, res, next) => {
    try {
        const model = req.body
        const passwordb = await encode.encryptPassword(model.password)
        model.passwordb = passwordb
        const reset = await resetServict.ResetPasswordAmin(model)
        return res.status(200).send({reset});
    } catch (error) {
        next(error)
    }
}
    /* RESET PASSWORD */
exports.PasswordResetSupperAdmin = async (req, res, next) => {
    try {
        const model = req.body
        const passwordb = await encode.encryptPassword(model.password)
        model.passwordb = passwordb
        const reset = await resetServict.ResetPasswordSupperAmin(model)
        return res.status(200).send({reset});
    } catch (error) {
        next(error)
    }
}