const myModel = require("../model/models")
require("dotenv").config()
const jwt = require("jsonwebtoken")

const ath = async (req, res, next) => {
    try {
        const token = req.params.token
        const decodedToken = jwt.verify(token, process.env.jsonSecret)
        const user = await myModel.findById(decodedToken.userId)

        if (!user) {
            return res.status(401).json({
                message: `unable to find user`
            })
        }
        if (user.token === null) {
            return res.status(200).json({
                message: `logged out successfully`
            })
        }
        next()
    } catch (error) {
        res.status(500).json(error.message)
    }
}