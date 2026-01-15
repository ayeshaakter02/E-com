require('dotenv').config()
const express = require("express")
const dbConnection = require("./src/config/dbconfig")
const router = require("./src/route")
const errorHandlingMiddelware = require('./src/utils/errorhandling')
const pathNotFound = require('./src/utils/pathnotfound')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("uploads"))

// database connection
dbConnection()

// router middleware 
app.use(router)

//page not found middleware
app.use(pathNotFound)

// error handle
app.use((errorHandlingMiddelware))

app.listen(port,()=>{
    console.log(`server is running port number ${port}`)
})