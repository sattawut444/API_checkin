const sequelize = require('../config/dbConfig');
const models = require('../models/index')
const { Op } = require("sequelize");

    /* Detail ADMIN ID*/
exports.detailAdmin = async (model) => {
    let sql =`
    SELECT
    *
    FROM admin
    WHERE name = '${model.name}' OR status = '${model.status}'
    LIMIT ${model.limit}
    OFFSET ${model.offset}
    `
    return sequelize.query(sql)
}
    /* LIST ADMIN */
exports.listAdmin = async (model) => {
   let sql =`
   SELECT
   *
   FROM admin
   WHERE status = 1
   LIMIT ${model.limit}
   OFFSET ${model.offset}
   `
   return sequelize.query(sql)
}
    /* UPDARE ADMIN ID */
exports.updateAdmin = async (model) => {
    return await models.admin.update({
        name : model.name,
        sername: model.sername,
        age : model.age,
        position : model.position,
        birthday : model.birthday,
        phone : model.phone,
        status : 1,
        imge : model.imge,
    },{ where : { id : model.id }})
}
    /* DELETE ADMIN ID */
exports.deleteAdmin = async (model) => {
    return await models.admin.update({
        status : 0,
    },{where : { id : model.id }})
}
