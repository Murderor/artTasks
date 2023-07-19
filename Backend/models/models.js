const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Employee = sequelize.define('employee',{
    id: {type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, allowNull:false},
    technology:{type:DataTypes.STRING, allowNull: false},
    workspace:{type:DataTypes.STRING, allowNull:true}
})

module.exports={
    Employee
}