const sequelize = require('../config/dbConfig');
const models = require('../models/index')
const { Op } = require("sequelize");

    /* REGISTER USER */
exports.userRegister = async(model) => {
    return await models.user.create({
        name : model.name,
        email : model.email,
        password : model.passwordb,
        age : model.age,
        position : model.position,
        birthday : model.birthday,
        phone : model.phone,
        status : 1,
        imge: model.imge
    })
}
    /* REGISTER ADMIN */
exports.adminRegister = async(model) => {
    return await models.admin.create({
        name : model.name,
        email : model.email,
        password : model.passwordb,
        age : model.age,
        position : model.position,
        birthday : model.birthday,
        phone : model.phone,
        status : 1,
        imge: model.imge
    })
}