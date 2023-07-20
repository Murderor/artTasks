const Router = require("express")
const router = new Router()
const employeeRouter = require('./employeeRouter')
const picsRouter = require('./picsRouter')

router.use('/pics', picsRouter)
router.use('/employee', employeeRouter)

module.exports = router