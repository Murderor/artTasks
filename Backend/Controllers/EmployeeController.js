const {Employee} = require('../models/models')
class EmployeeController{
    async addEmployee(req, res){

    }

    async getEmployees(req, res){
        const emp = await Employee.findAll()
        res.json(emp)
    }
}
module.exports = new EmployeeController()