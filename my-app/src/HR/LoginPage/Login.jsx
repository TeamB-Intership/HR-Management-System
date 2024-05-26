import React, { useState } from 'react';
import {Button,} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import pic from "./6310507.jpg"
import "./LoginPage.css";
import InputGroup from 'react-bootstrap/InputGroup';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const Login = () => {
    const [validated, setValidated] = useState(false);
    const[formData,setFormData]=useState({
    email:"",
    password:"",
    })
    const handleChanges=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const{email,password}=formData;
        if(email !== "hrmanager@gmail.com"  || password !== "hrpassword"){
          toast.error("Provide Correct Email and Password");
          setValidated(true);
        }else{
         const postData={email,password}
         console.log(postData)
          axios
          .post("URL",postData)
          .then((result) => {
            console.log(result);
       
          })
          .catch((error) => {
            console.log(error);
          });
          setFormData({
            email:"",
            password:"",
            
          })
          setValidated(false)
        }
      
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
    
       
      
    }
  return (
    <div className="m-1 d-flex justify-content-center align-items-center vh-100 loginPage">
    

<img src={pic} alt='loginpic' className='h-75 w-25'/>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h1>Login Page</h1>

      <div className="w-100 m-1">
      <Form.Label>Email Address</Form.Label> 
      <InputGroup hasValidation>
        <Form.Control
          type="email"
          name='email'
          id="email"
          value={formData.email}
          onChange={handleChanges}
          placeholder="Enter Email"
          aria-describedby="inputGroupPrepend"
          required
        />
        <Form.Control.Feedback type="invalid">
             Please provide email address
            </Form.Control.Feedback>
            </InputGroup>
        </div>

        <div className="w-100 m-1">
        <Form.Label>Password</Form.Label> 
        <InputGroup hasValidation>
        <Form.Control
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChanges}
          placeholder="Enter Password"
          aria-describedby="inputGroupPrepend"
          required
        />
          <Form.Control.Feedback type="invalid">
              Please provide password
            </Form.Control.Feedback>
            </InputGroup>
        </div>
     
        <div className="w-100 mt-3 ms-1">
        <Button variant="primary" type='submit' className='w-100'>Login</Button>
        </div>
        <p>Don't have an account ? <a href='./Login.jsx'>Signup</a></p>
    </Form>  
    <ToastContainer />
    </div>
  )
}

export default Login