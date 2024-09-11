const model = require('../models/user')

const bcrypt = require('bcrypt')



const create = async(req,res)=>{



try

{
const userinfo =  new model(req.body)
if(!userinfo){


    res.status(400).json({message:"user data not found"})
}


const salt = await bcrypt.genSalt(10)


let hashedpassword =  await bcrypt.hash(userinfo.password,salt)



userinfo.password = hashedpassword




const saveinfo =  await userinfo.save()

res.status(200).json({success:true})


    }



    catch(error){

res.status(500).json({message:"could not connect"})
    }


}



const getall = async(req,res)=>{

    try{


        const getuserdata = await model.find({})
        if(!getuserdata){
            res.status(400).json({message:"data does not exist"})
        }

        res.status(200).json({message:getuserdata})
    }
    
    catch(error){
        res.status(500).json({error:error})
    }
}


const getuser = async(req,res)=>{



try {

    const id = req.params.id
    const finduser = await model.findById(id)
    if(!finduser){

     return   res.status(400).json({message:'user does not exist'})


    }


res.status(200).json(finduser)
    

}



catch (error) {

    res.status(500).json({error:error})


    
}

}


const update =async(req,res)=>{

    try {
        const id = req.params.id

const userexist = await model.findById(id)

if(!userexist){

    return res.status(400).json({message:'user does not exist'})
}

const updateduser = await model.findByIdAndUpdate(id,req.body,{new:true})
res.status(200).json({message:"user updated"})


    } 
    
    
    
    catch (error) {
        

        res.status(500).json({error:error})
    }



}


const deleteuser = async( req,res)=>{
try {
    
const id = req.params.id



const userexist =   await model.findById(id)


if(!userexist){

    res.status(400).json({message:"user does not exist"})
}

const deleteuser =  await model.findByIdAndDelete(id)

res.status(200).json({message:"user deleted succesfully"})





} catch (error) {
    
}



}

module.exports = {create,getall,getuser,update,deleteuser}