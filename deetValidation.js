const joi = require("@hapi/joi") //imported @hapi/joi

const signupChecks = (data) => {
    const validationSchema = joi.object({
        username:joi.string().min(4).required(),
        email:joi.string().min(4).required().email(),
        password:joi.string().min(4).required()
    })
    return validationSchema.validate(data)
}


const loginChecks = (datae) => {
    const validationSchema = JOI.object({
        email:joi.string().min(4).required().email(),
        password:joi.string().min(4).required()
    })
    return validationSchema.validate(data)
}
module.exports.signupChecks = signupChecks
module.exports.loginChecks = loginChecks