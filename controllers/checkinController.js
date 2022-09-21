const dayjs = require('dayjs');
const checkServiect = require('../service/checkinServiect'); 

    /* CHECK IN */
exports.UserCheckIn = async (req, res, next) => {
    try {
        const model = req.body
        const checkin = await checkServiect.CheckIn(model)
        return res.status(200).send({checkin})
    } catch (error) {
        next(error)
    }
}
    /* CHECK OUT */
exports.UserCheckout = async (req,res, next) => {
    try {
        const model = req.body
        const timeMax = await checkServiect.CheckInTimeMax(model)
        model.id = timeMax.id
        const checkout = await checkServiect.CheckOut(model)
        return res.status(200).send({checkout})
    } catch (error) {
        next(error)
    }
}
    /* LIST CHECK IN */
exports.ListCheckIn = async (req,res, next) => {
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
        const list = await checkServiect.CheckinList(model)
        const data = list[1]
        const current = model.current
        console.log(current)
        
        return res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}
    // Search Check-in   
exports.CheckInSearch = async (req, res, next) =>{
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
        const dataDetail = await checkServiect.SearchCheckIn(model)
        const data = dataDetail[0]
        return res.status(200).json({data})
    } catch (error) {
        next(error)
    }
}