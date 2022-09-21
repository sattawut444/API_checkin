const sequelize = require('../config/dbConfig');
const models = require('../models/index')
const { Op } = require("sequelize");

/* UPDARE SUPPER ADMIN */
    exports.updateSupperAdmin = async (model) => {
        return await models.supperadmin.update({
            name : model.name,
            position : model.position,
            status : model.status,
            imge : model.imge,
        },{ where : { id : model.id }})
    }