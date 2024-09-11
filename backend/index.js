const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
require('dotenv').config()
const mongoose = require('./database/db')
const router = require('./routes/routes')






const app = express()

app.use(cors())
app.use(bodyparser.json())


const PORT = process.env.PORT || 5013




app.use('/home',router)
app.listen(PORT,()=>{

    console.log(`server is running on port ${PORT}`)
})


