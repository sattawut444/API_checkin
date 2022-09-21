const sequelize = require('../config/dbConfig');
const models = require('../models/index')
const { Op } = require("sequelize");

    /* RESET PASSWORD USERS */
exports.ResetPasswordUser = async (model) => {
    console.log(model)
    return await models.user.update({
        password: model.passwordb,
    }, { where : { email : model.email }})
}
    /* RESET PASSWORD ADMIN */
exports.ResetPasswordAmin = async (model) => {
   return await models.admin.update({
       password: model.passwordb,
   }, { where : { email : model.email }})
}
    /* RESET PASSWORD SUPPER ADMIN */
exports.ResetPasswordSupperAmin = async (model) => {
   return await models.supperadmin.update({
       password: model.passwordb,
   }, { where : { email : model.email }})
}