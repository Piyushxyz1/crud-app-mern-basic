import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from    'axios'
import './adduser.css'
import toast from "react-hot-toast";

const Adduser = () => {
  
const navigate = useNavigate()
    const users = {


        firstname: '',
        lastname: '',
        email:'',
        password:''
    }
    const [inputs,setInput] = useState(users)




    const inputhandler=(e)=>{

        const {name,value} = e.target
        setInput({...inputs,[name]:value})
      
    }
const submission=async(e)=>{
    e.preventDefault()
    await axios.post("http://localhost:5012/home/create",inputs)


    .then((res)=>{

       toast.success('user created succesfully',{position:'top-center'})
       navigate('/')
    })

   
    .catch((err)=>{

        console.log(err)
    })


    
}
 return(  <div className="adduser">

        <Link to ='/'><i class="fa-solid fa-arrow-left"></i>back</Link>
        <h3>add new user</h3>
        <form className="add-user-form" onSubmit={submission}>
            <div className="inputs">
                <label htmlFor="fname">First name</label>
                <input type = "text"  id = 'fname' name = "firstname" placeholder="enter your firstname" onChange={inputhandler}/>
            </div>
            <div className="inputs">
                <label htmlFor="fname">last name</label>
                <input type = "text"  id = 'lname' name = "lastname" placeholder="enter your lastname" onChange={inputhandler}/>
            </div>
            <div className="inputs">
                <label htmlFor="fname">email</label>
                <input type = "text"  id = 'email' name = "email" placeholder="enter your email" onChange={inputhandler}/>
            </div>
            <div className="inputs">
                <label htmlFor="fname">password</label>
                <input type = "text"  id = 'password' name = "password" placeholder="enter your password" onChange={inputhandler}/>
            </div>
            <button type = 'submit'  >Add user</button>
        </form>

    </div>
 )
};

export default Adduser;
