const loginServict = require('../service/loginService');
const adminServict = require('../service/adminService'); 
const encode = require('../middleware/encode');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtft = require('../middleware/jwt');

    /* DETAIL ADMIN */
exports.adminDetail = async (req, res, next) => {
    try {
        const model = req.body
        const limit = 8;
        if(!model.limit){
            model.limit = limit
        }
        if(model.page > 1){
            model.current = model.page;
            model.page -= 1;
            model.offset = model.page * model.limit;
        }else{
            model.current = 1;
            model.offset = 0;
        }
        const dataDetail = await adminServict.detailAdmin(model)
        // console.log(dataDetail)
        const admin = await dataDetail[1]
        return res.status(200).send(admin);
    } catch (error) {
        next(error)
    }
}
    /* LIST ADMIN */
exports.adminList = async (req, res, next) => {
    try {
        const model = req.body
        const limit = 8;
        if(!model.limit){
            model.limit = limit
        }
        if(model.page > 1){
            model.current = model.page;
            model.page -= 1;
            model.offset = model.page * model.limit;
        }else{
            model.current = 1;
            model.offset = 0;
        }
        const dataList = await adminServict.listAdmin(model)
        const admin = await dataList[0]
        return res.status(200).send(admin);
    } catch (error) {
        next(error)
    }
}
    /* UPDATE ADMIN */
exports.adminUpdate = async (req, res, next) => {
    try {
        const model = req.body
        const dataUpdate = await adminServict.updateAdmin(model)
        return res.status(200).send({dataUpdate});
    } catch (error) {
        next(error)
    }
}
    /* DELETE ADMIN */
exports.adminDelete = async (req, res, next) => {
    try {    
        const model = req.body
        const dataDelete = await adminServict.deleteAdmin(model)
        return res.status(200).send({dataDelete})
    } catch (error) {
        next(error)
    }
}