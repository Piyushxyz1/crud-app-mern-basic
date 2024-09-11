import React, { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'
import './update.css'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Updateuser = () => {

const Navigate = useNavigate()
const users = {

firstname: '',
lastname: '',
email:  '',
password:''

}

    const {id} = useParams()
    const [user,setUser] = useState(users)


    const inputHandler=(e)=>{


        const { name,value} =  e.target

        setUser({...user,[name]:value})
        


    }



    useEffect(()=>{


     axios.get(`https://crud-app-lbz1.onrender.com/home/getuser/${id}`)

        .then((res)=>{

        setUser(res.data)
        })




        .catch(()=>{

            console.log("error")
        })


    },[id])


    const Submitdata=(e)=>{
        e.preventDefault()
        axios.put(`https://crud-app-lbz1.onrender.com/home/updateuser/${id}`,user)

        .then((response)=>{
            toast.success("user updated succesfully",{position:"top-center"})
           
            Navigate('/')

           

        })

           
        setUser({



        })
        


    }
  return (
    <div className='update-user'>
        <Link to = {'/'}>
        back</Link>
        <h3>update user</h3>
        <form className="add-user-form" onSubmit={Submitdata}>
            <div className="inputs">
                <label htmlFor="fname">First name</label>
                <input type = "text" id = 'fname' value = {user.firstname} name = "firstname" placeholder="enter your firstname" onChange={inputHandler}/>
            </div>
            <div className="inputs">
                <label htmlFor="fname">last name</label>
                <input type = "text" id = 'lname' value = {user.lastname}name = "lastname" placeholder="enter your lastname" onChange={inputHandler}/>
            </div>
            <div className="inputs">
                <label htmlFor="fname">email</label>
                <input type = "text" id = 'email' value = {user.email}name = "email" placeholder="enter your email" onChange={inputHandler}/>
            </div>
           
            <button  type = 'submit' >Update user</button>
        </form>



    </div>
  )
}

export default Updateuser