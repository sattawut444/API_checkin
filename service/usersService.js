const sequelize = require('../config/dbConfig');
const models = require('../models/index')
const { Op } = require("sequelize");

    /* Detail Users ID*/
exports.detailUsers = async (model) => {
    let sql =`
    SELECT
    *
    FROM user
    WHERE name = '${model.name}' OR status = '${model.status}'
    LIMIT ${model.limit}
    OFFSET ${model.offset}
    `
    return sequelize.query(sql)
}
    /* LIST USERS */
exports.listUsers = async (model) => {
   let sql =`
   SELECT
   *
   FROM user
   WHERE status = 1
   LIMIT ${model.limit}
   OFFSET ${model.offset}
   `
   return sequelize.query(sql)
}
    /* UPDARE USER ID */
exports.updateUser = async (model) => {
    return await models.user.update({
        name : model.name,
        sername : model.sername,
        age : model.age,
        position : model.position,
        birthday : model.birthday,
        phone : model.phone,
        status : 1,
        imge : model.imge,
    },{ where : { id : model.id }})
}
    /* DELETE USER ID */
exports.deleteUser = async (model) => {
    return await models.user.update({
        status : 0,
    },{where : { id : model.id }})
}
