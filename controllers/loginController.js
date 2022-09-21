const loginServict = require('../service/loginService')
const encode = require('../middleware/encode');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtft = require('../middleware/jwt');
const dayjs = require('dayjs');
    /* USER LOGIN */
exports.Userlogin = async (req, res, next) => {
    try {
        const model = req.body
        const userlog = await loginServict.UserLoginPassword(model)
        const login = await bcrypt.compare(model.password, userlog.password)
        if (login == true) {
            model.user_id = userlog.id
            const data = await loginServict.DateTimeLogin(model)
            const token = await jwtft(userlog);
            return res.status(200).send({userlog,token});
        } else {
            return res.status(400).json("Invalid email or password");
        }
    } catch (error) {
        next(error);
    }
}

    /* LOGOUT */
exports.LogOutUser = async (req, res, next) => {
    try {
        const model = req.body
        model.time_out = new Date()
        const logmax = await loginServict.UserLogTimeMax(model)
        model.period = dayjs(model.time_out).diff(logmax.date_login, 's')
        const timeout = await loginServict.UserLogOut(model,logmax)
        // console.log(timeout)
        const logout = timeout[0]
        if(logout == 1){
            const status = logout-1
            return res.status(200).json({status})
        }
    } catch (error) {
        next(error)
    }
}
    /* ADMIN LOGIN EMAIL */
exports.loginEmail = async (req, res, next) => {
    try {
        const model = req.body
        model.date_login = new Date()
        const LoginEmail = await loginServict.LoginEmail(model)
        if (LoginEmail == null) {
            const EmailLogin = await loginServict.EmailLogin(model)
            const LoginEmail = await loginServict.LoginEmail(model)
            model.id = LoginEmail.id
            const DateLogin = await loginServict.DateTimeLogin(model)
            return res.status(200).send(DateLogin);
        } else {
            model.id = LoginEmail.id
            const DateLogin = await loginServict.DateTimeLogin(model)
            return res.status(200).send(DateLogin);
        }
    } catch (error) {
        next(error)
    }
}

    /* Admin LOGIN */
exports.Adminlogin = async (req, res, next) => {
    try {
        const model = req.body
        const data = await loginServict.AdminLoginPassword(model)
        const login = await bcrypt.compare(model.password, data.password)
        if (login != false) {
            const token = await jwtft(data.email);
            return res.status(200).send({token, data});
        } else {
            return res.status(400).json("Invalid email or password");
        }
    } catch (error) {
        next(error);
    }
}