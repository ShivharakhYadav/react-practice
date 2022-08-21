const Users = require('../schemas/userSchema')
const signUp = async (req, res) => {
    try {
        const findUser = await Users.find({ emailorphone: req.body.emailorphone })
        if (findUser.length) {
            res.status(404).json({ Message: "Already a user" })
        }
        else {
            const item = await Users.create(req.body)
            res.status(200).json(item)
        }
    }
    catch (err) {
        const er = err.errors;
        const nn = Object.keys(er)[0]
        res.status(202).json({
            message: er[nn].properties.message
        })
    }
}

const login = async (req, res) => {
    try {
        const validUser = await Users.find({
            $and: [{
                $or: [{ emailorphone: req.body.emailorphone },
                { username: req.body.emailorphone }]
            }, { password: req.body.password }]
        });
        console.log("valid", validUser)
        res.status(200).json(validUser)
    }
    catch (err) {
        console.log("err", err)
    }
}
module.exports = { signUp, login }