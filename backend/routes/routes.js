const express = require("express")

const{create,getall, getuser, update,deleteuser} = require('../controllers/user')
const Router = express.Router()





Router.post('/create',  create)
Router.get('/allusers',getall)
Router.get('/getuser/:id',getuser)
Router.put('/updateuser/:id',update)
Router.delete('/deleteuser/:id',deleteuser)




module.exports = Router