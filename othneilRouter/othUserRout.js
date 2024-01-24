const router = require("express").Router()
const {createUser} = require("../controller/usercontroller.js")

router.post("/createuser", createUser)

module.exports = router