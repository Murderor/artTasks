const {Employee} = require('../models/models')
const uuid = require('uuid')
const path = require('path')
class EmployeeController{
    async addEmployee(req, res){
        try{
            if(req.files){
                const {name,technology, workspace,possition} = req.body
                const {img} = req.files
                let filename = uuid.v4() + ".jpg"
                await img.mv(path.resolve(__dirname, '..', 'static', filename))
                var options = {year: 'numeric', month: 'long', day: 'numeric' };
                var today  = new Date();
                var strDate = today.toLocaleDateString("en-US", options)
                const emp = await Employee.create({name,technology,workspace, possition, img:filename, employed:strDate})
                res.json(emp)
            }
            else {
                const {name, technology, workspace, possition} = req.body
                console.log(req.body)
                var options = {year: 'numeric', month: 'long', day: 'numeric' };
                var today  = new Date()
                var strDate = today.toLocaleDateString("en-EN", options)
                const emp = await Employee.create({name:name,technology:technology,workspace:workspace, possition:possition, employed:strDate})
                res.json(emp)
            }
        }
        catch (e) {
            console.log(e)
        }
        console.log(req.body)

    }

    async getEmployees(req, res) {
        const id = req.headers.id;
        const ws = req.headers.workspace;
        if(id){
            const emp = await Employee.findByPk(id)
            res.json(emp)
        }
        else if(ws){
            const emp = await Employee.findOne({where:{workspace:ws}})
            res.json(emp)
        }
        else
        {
            const emp = await Employee.findAll()
            res.json(emp)
        }
    }
    async editEmployee(req, res){

        try {
            const id = req.headers.id;
            if(id && req.files){
                const emp = await Employee.findAll
                const {name,technology, workspace,possition} = req.body
                const {img} = req.files
                let filename = uuid.v4() + ".jpg"
                console.log(req.body)
                await img.mv(path.resolve(__dirname, '..', 'static', filename))
                Employee.update({name,technology, workspace,possition, img:filename},{where:{id:id}})

                res.json(emp)
            }
            else
            {
                const emp = await Employee.findAll
                const {name,technology, workspace,possition} = req.body
                console.log(req.body)
                Employee.update({name,technology, workspace,possition},{where:{id:id}})
            }
        }
        catch (e){
            console.log("huy")
            console.log(e)
        }
    }
}
module.exports = new EmployeeController()