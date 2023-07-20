require('dotenv').config()
const express = require('express')
const cors = require('cors')
const sequelize = require('./db')
const {Employee} = require('./models/models')
const fileupload = require('express-fileupload')
const path = require('path')

const models=require('./models/models')

const PORT = process.env.PORT || 6000

const app = express()

const router = require('./routes/index')
const corsOptions ={
    origin:'http://localhost:3000',
    credentials:false,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileupload({}))
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use("/image", express.static(path.resolve(__dirname, 'static')));


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

