const historyServiect = require('../service/historyService'); 

    /* LIST TIME LOGIN */
exports.ListLoginTime = async (req, res, next) => {
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
        const logintime = await historyServiect.LoginTimeList(model)
        const logtime = logintime[0]
        return res.status(200).send(logtime)
    } catch (error) {
        next(error)
    }
}
    /* USER LOGINTIME */
exports.LogUserTime = async (req, res, next) => {
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
        const DataLogin = await historyServiect.UserLoginTime(model)
        const userlogin = DataLogin[0]
        return res.status(200).send(userlogin)
    } catch (error) {
        next(error)
    }
}