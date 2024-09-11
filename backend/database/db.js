const mongoose = require('mongoose')
require('dotenv').config()


mongoose.connect(process.env.MONGO_URL,{dbName:'Registrationinfo'}  )



.then(()=>{

    console.log("connected to database successfully")
})
.catch(()=>{

    console.log("could not connect")
})



module.exports = mongoose