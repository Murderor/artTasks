const Router = require("express")
const router = new Router()
const employeeController = require('../Controllers/EmployeeController')

router.post('/',employeeController.addEmployee)
router.get('/',employeeController.getEmployees)
router.put('/', employeeController.editEmployee)

module.exports = router