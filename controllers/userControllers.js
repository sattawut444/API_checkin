const userServict = require('../service/usersService'); 

    /* DETAIL USER */
exports.userDetail = async (req, res, next) => {
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
        const dataDetail = await userServict.detailUsers(model)
        const user = await dataDetail[0]
        return res.status(200).send(user);
    } catch (error) {
        next(error)
    }
}
    /* LIST USER */
exports.userList = async (req, res, next) => {
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
        const dataList = await userServict.listUsers(model)
        const users = await dataList[0]
        return res.status(200).send(users);
    } catch (error) {
        next(error)
    }
}
    /* UPDATE USER */
exports.userUpdate = async (req, res, next) => {
    try {
        const model = req.body
        const profile = await userServict.updateUser(model)
        return res.status(200).send({profile});
    } catch (error) {
        next(error)
    }
}
    /* DELETE USER */
exports.userDelete = async (req, res, next) => {
    try {    
        const model = req.body
        const dataDelete = await userServict.deleteUser(model)
        return res.status(200).send({dataDelete})
    } catch (error) {
        next(error)
    }
}