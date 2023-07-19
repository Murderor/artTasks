require('dotenv').config()
const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const {Employee} = require('./models/models')

const models=require('./models/models')

const PORT = process.env.PORT || 6000

const app = express()

const router = require('./routes/index')

app.use(express.json())
app.use(cors())


app.use('/api', router)

const start = async ()=>{
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT,()=>{
            console.log(`Server started on port ${PORT}`)
        })
    }
    catch (e){
        console.log(e)
    }
}

start()

