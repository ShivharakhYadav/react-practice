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
        const MissingField = Object.keys(er)[0]
        res.status(202).json({ message: `Missing Field ${MissingField}` });
    }
}

const login = async (req, res) => {
    try {
        const validUser = await Users.find({
            $or: [{ emailorphone: req.body.emailorphone },
            { username: req.body.emailorphone }]
        });
        if (validUser.length) {
            if (validUser[0].password === req.body.password) {
                res.status(200).json({ message: "Valid User" })
            } else {
                res.status(404).json({ message: "Invalid Password" })
            }
        }
        else {
            res.status(404).json({ message: `User not found with ${req.body.emailorphone}` })
        }
    }
    catch (err) {
        console.log("err", err)
    }
}
module.exports = { signUp, login }