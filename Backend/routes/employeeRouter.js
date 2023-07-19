const Router = require("express")
const router = new Router()
const employeeController = require('../Controllers/EmployeeController')

router.post('/',)
router.get('/',employeeController.getEmployees)

module.exports = router