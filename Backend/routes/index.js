const Router = require("express")
const router = new Router()
const employeeRouter = require('./employeeRouter')


router.use('/employee', employeeRouter)

module.exports = router