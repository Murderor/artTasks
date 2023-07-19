const {Employee} = require('../models/models')
class EmployeeController{
    async addEmployee(req, res){
        const name = req.body
        const technology = req.body
        const workspace = req.body
        const emp = await Employee.create(name,technology,workspace)
        res.json(emp)
    }

    async getEmployees(req, res) {
        const emp = await Employee.findAll()
        res.json(emp)
    }
}
module.exports = new EmployeeController()