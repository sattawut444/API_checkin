const sequelize = require('../config/dbConfig');
const models = require('../models/index')
const { Op } = require("sequelize");
const dayjs = require('dayjs');
var cron = require('node-cron');
    /* CHECK IN */
exports.CheckIn = async (model) => {
    return await models.checkin.create({
        user_id : model.user_id,
        latitude : model.latitude,
        longitude : model.longitude,
        status : 1,
        time_in : new Date(),
    })
}
    /* CHECK IN TIME MAX */
exports.CheckInTimeMax = async (model) => {
    return await models.checkin.findOne({
        where : {
            user_id : model.user_id
          },
          order : [
            ['time_in','DESC']
         ],
    })
}
    /* CHECK OUT */
exports.CheckOut = async (model) => {
    return await models.checkout.create({
        checkin_id : model.id,
        latitude : model.latitude,
        longitude : model.longitude,
        status : 1,
        time_out : new Date(),
    })
}
    /* CHECK-IN LIST */
exports.CheckinList = async(model) => {
    console.log(model)
    let sql = `
    SELECT
    cn.id,
    cn.user_id,
    u.name,
    cn.latitude AS latitude_in,
    cn.longitude AS longitude_in,
    cn.time_in,
    co.latitude AS latitude_out,
    co.longitude AS longitude_out,
    co.time_out
    FROM checkin cn
    LEFT JOIN checkout co ON cn.id = co.checkin_id
    LEFT JOIN user u ON cn.user_id = u.id
    ORDER BY cn.id DESC
    LIMIT ${model.limit}
    OFFSET ${model.offset}
    `
    return sequelize.query(sql)
}

    /* Search CHECK_IN-OUT */
exports.SearchCheckIn = async(model) => {
    console.log(model)
    let sql = `
    SELECT
    cn.id,
    cn.user_id,
    u.name,
    cn.latitude AS latitude_in,
    cn.longitude AS longitude_in,
    cn.time_in,
    co.latitude AS latitude_out,
    co.longitude AS longitude_out,
    co.time_out
    FROM checkin cn
    LEFT JOIN checkout co ON cn.id = co.checkin_id
    LEFT JOIN user u ON cn.user_id = u.id
	WHERE u.name = '${model.name}' OR cn.time_in between '${model.date} 00:00:00' AND '${model.date} 23:59:59'
    ORDER BY cn.id DESC
    LIMIT ${model.limit}
    OFFSET ${model.offset}
    `
    return sequelize.query(sql)
}