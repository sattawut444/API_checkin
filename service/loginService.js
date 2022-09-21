const sequelize = require('../config/dbConfig');
const models = require('../models/index')
const { Op } = require("sequelize");

    /* USERLOGIN PASSWORD */ 
exports.UserLoginPassword = async (model) => {
    return await models.user.findOne({
         where : {
            email : model.email // mean NOT NULL
          },
    })
}
    /* USERLOGIN PASSWORD */ 
exports.AdminLoginPassword = async (model) => {
    return await models.admin.findOne({
         where : {
            email : model.email // mean NOT NULL
          },
    })
}
    /* CHECK EMAIL */ 
exports.LoginEmail = async (model) => {
    return await models.admin.findOne({
         attributes : [
            'id'
         ],
         where : {
            email : model.email // mean NOT NULL
          },
    })
}
    /* LOGIN EMAIL */ 
exports.EmailLogin = async (model) => {
    return await models.admin.create({
        name : model.name,
        email : model.email,
        age : model.age,
        position : model.position,
        birthday : model.birthday,
        phone : model.phone,
        status : 1,
        imge : model.imge
    })
} 
    /* LOGIN TIME */
exports.DateTimeLogin = async (model) => {
    return await models.login.create({
        user_id : model.user_id,
        date_login : new Date(),
        status : 1
    })
}    
    /* LOGTIMEMAX USER */
exports.UserLogTimeMax = async (model) => {
    return await models.login.findOne({
        where : {
            user_id : model.id
          },
         order : [
            ['date_login', 'DESC'],
         ],
    })
}
    /* LogOut */
exports.UserLogOut = async (model,logmax) => {
    console.log(model)
    return await models.login.update({
        date_logout : model.time_out,
        period : model.period,
        status: 0
    },{ where : { id : logmax.id }})
}
