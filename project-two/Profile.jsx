import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const Profile=()=>
{
  let[info,setinfo]=useState({
    username:"",
    email:"",
    number:"",
    address:"",
   })
   let{username,email,number,address}=info;
   let handlesubmit=(e)=>
   {
    e.preventDefault();
    console.log(info);
    }
    let handlechange=(e)=>
    {
        let{name,value}=e.target;
        setinfo({...info,[name]:value});
    }
    return(
      <center>
      <form action="" onClick={handlesubmit}>
      <h3>Fill in your details</h3>
                <label>Username</label><br></br>
                <input type="text" name="username" value={username} onChange={handlechange}></input><br></br>
                <label>Email</label><br></br>
                <input type="email" name="email" value={email} onChange={handlechange}></input><br></br>
                <label>Phone Number</label><br></br>
                <input type="number" name="number" value={number} onChange={handlechange}></input><br></br>
                <label>Delivery Address</label><br></br>
                <input type="text" name="address" value={address} onChange={handlechange}></input><br></br><br></br>
                <button><Link to='/Portal'>Proceed</Link></button>

    </form>
    </center>
    )
}
export default Profile;