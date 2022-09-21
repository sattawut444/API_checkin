const sequelize = require('../config/dbConfig');
const models = require('../models/index')
const { Op } = require("sequelize");
const uid = require('../middleware/RandomID');

    /* USER ID */
exports.OtpIdUser = async (model) => {
    return await models.user.findOne({
         attributes : [
            'id'
         ],
         where : {
            email : model.email // mean NOT NULL
          },
    })
}
    /* OTP ID */
exports.OtpId = async(model) => {
    return await models.otp.create({
        otp : uid.myOtp(),
        status : 1,
        user_id : model.id,
        ref : uid.makeid()
    }) 
}
    /* CHECK OTP */
exports.OtpCheck = async (model) => {
    console.log(model)
    return await models.otp.findOne({
        attributes : [
            'user_id'
         ],
         where : {
            otp : model.otp // mean NOT NULL
          },
    })
}