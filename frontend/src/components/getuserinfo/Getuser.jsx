import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './getuser.css'
import axios from 'axios'

const Getuser = () => {


    const [datainfo,getdata] = useState([])




    const fetchdata = async()=>{

        const response =   await axios.get('http://localhost:5012/home/allusers')
        getdata(response.data.message)
    

    }
  



    

    useEffect(()=>{


      
        fetchdata()
    },[])

const deleteuser = async(userid)=>{

  await axios.delete(`http://localhost:5012/home/deleteuser/${userid}`)
  .then((response)=> getdata(prevuser=>prevuser.filter(item=>item._id !==userid)))


  .catch((err)=>console.log(err))
}

  return (
    <div className="user-table">
    <Link to={"/add"} className='add-button'>adduser</Link>
    <table border={1} cellPadding={10} cellSpacing={0} className='table'>
      <thead>
        <tr>
          <th>S.No</th>
          <th>user name</th>
          <th>user email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>

      

        {
        datainfo.map((item,index)=>{

return(
    
<tr>

       <td key={item._id} > </td>
          <td>{item.firstname} {item.lastname}</td>
          <td>{item.email}</td>
          <td>
              <button className='delete-button' onClick={()=>{deleteuser(item._id)}}>
                  Delete
                  <i className="fa-solid fa-trash"></i>
              </button>
              <Link to = {`/update/`+item._id} className='edit-button'>edit <i class="fa-solid fa-pen-to-square"></i></Link>
          </td>
    
          </tr>
    
    
)


        })}
       
      </tbody>
    </table>
  </div>
 
  )
}

export default Getuser
