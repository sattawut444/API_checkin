const supperadminService = require('../service/supperadminService'); 

    /* DETAIL USER */
    exports.SupperAdminUpdate = async (req, res, next) => {
        try {
            const model = req.body
            const dataUpdate = await supperadminService.updateSupperAdmin(model)
            return res.status(200).send({dataUpdate});
        } catch (error) {
            next(error)
        }
    }