const otpService = require('../service/otpService'); 

    /* CHECK USER */
exports.otpId = async (req, res, next) => {
    try {
        const model = req.body
        const userId = await otpService.OtpIdUser(model)
        const otpId = await otpService.OtpId(userId)
        const otp = otpId.otp
        return res.status(200).send({otp})
    } catch (error) {
        next(error)
    }
}
    /* CHECK OTP */
exports.otpIduser = async (req, res, next) => {
    try {
        const model = req.body
        const status = await otpService.OtpCheck(model)
        return res.status(200).send(status)
    } catch (error) {
        next(error)
    }
}

