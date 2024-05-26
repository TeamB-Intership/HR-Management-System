import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate=useNavigate();
  const[formData,setFormData]=useState({
    emailDetail:"",
    password:"",
  })
  const handleChange=(e)=>{
    const{name,value}=e.target;
    setFormData({...formData,[name]:value})
  }
  const submitForm=(e)=>{
    const {emailDetail,password}=formData;
    e.preventDefault();
    navigate("/",{state:{emailDetail,password}})
  }
  return (
    

    <div className="border w-25 m-auto p-3 mt-5">
    <form onSubmit={submitForm} >
      <h2 className="text-primary text-center ">Login Form</h2>
      <div>
        <label htmlFor="emailDetail">Email</label>
        <input
          type="email"
          id="emailDetail"
          name="emailDetail"
          className="form-control mb-1"
          placeholder="Enter email.."
          value={formData.emailDetail}
          onChange={handleChange}
        />
        <label htmlFor="password" className="mt-3">
          Password
        </label>
        <input
          type="password"
          id="password"
          name='password'
          className="form-control mb-1"
          placeholder="Enter password.."
          value={formData.password}
          onChange={handleChange}
          
        />
        
        <button type="submit" className="btn btn-primary mt-4">
          Login
        </button>
      </div>
    </form>
    
    </div>
  )
}

export default Login