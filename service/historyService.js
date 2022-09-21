const sequelize = require('../config/dbConfig');
const models = require('../models/index')
const { Op } = require("sequelize");

    /* Login LIST */
exports.LoginTimeList = async(model) => {
    let sql = `
    SELECT
    l.id,
    u.name,
    l.date_login,
    l.date_logout,
    l.period,
    l.status
    FROM login l
    JOIN user u ON l.user_id = u.id
    ORDER BY l.status DESC
    LIMIT ${model.limit}
    OFFSET ${model.offset}
    `
    return sequelize.query(sql)
}
    /* Detail LIMIT */
exports.UserLoginTime = async(model) => {
    // console.log(model)
    let sql = `
    SELECT
    l.id,
    u.name,
    l.date_login,
    l.date_logout,
    l.period,
    l.status
    FROM login l
    JOIN user u ON l.user_id = u.id
    WHERE u.name = '${model.name}' OR l.date_login between '${model.date} 00:00:00' AND '${model.date} 23:59:59'
    ORDER BY l.status DESC
    LIMIT ${model.limit}
    OFFSET ${model.offset}
    `
    return sequelize.query(sql)
}