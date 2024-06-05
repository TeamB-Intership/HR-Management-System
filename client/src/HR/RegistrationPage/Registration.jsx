import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

import "./Registration.css";
import InputGroup from 'react-bootstrap/InputGroup';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const Registration = () => {
    const [validated, setValidated] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstname:"",
        lastname:"",
        username:"",
        number:"",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
   

      const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, confirmPassword,username,number,firstname,lastname} = formData;

        if (email&& password&& confirmPassword && username&& number&&firstname&&lastname) {
       if(password !== confirmPassword){
            toast.error("Passwords do not match");
           }else{
            toast.success("Registration successful");
            setValidated(false);
            const postData = {  email, password, confirmPassword,username,number,firstname,lastname};
            axios
                .post("URL", postData)
                .then((result) => {
                    console.log(result);
                 
                })
                .catch((error) => {
                    console.log(error);
                   
                });
    
            setFormData({
                firstname:"",
                lastname:"",
                username:"",
                number:"",
                email: "",
                password: "",
                confirmPassword: ""
            });
           
           }
        }else{
            setValidated(true); 
            toast.error("Registration failed");
            
        }

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
    };

    return (
        <div className="m-1 d-flex justify-content-center align-items-center vh-100 registrationPage">
          
            <Form className='Registration' noValidate validated={validated} onSubmit={handleSubmit}>
                <h1>Registration Page</h1>
                
 <div className="d-flex flex-row" id="Name">
        <div className="d-flex flex-column w-50 m-2">
        <Form.Label>First Name</Form.Label>
        <InputGroup hasValidation>
                        <Form.Control
                            type="text"
                            name='firstname'
                            id="firstname"
                            value={formData.firstname}
                            onChange={handleChanges}
                            placeholder="Enter Firstname"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid" className='errors'>
                            Please provide Firstname
                        </Form.Control.Feedback>
                    </InputGroup>
       
        </div>
       
        <div className="d-flex flex-column w-50 m-2">
        <Form.Label>Last Name</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="text"
                            name='lastname'
                            id="lastname"
                            value={formData.lastname}
                            onChange={handleChanges}
                            placeholder="Enter lastName"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid" className='errors'>
                            Please provide Lastname
                        </Form.Control.Feedback>
                    </InputGroup>
         
        </div>
      </div>
              
 <div className="d-flex flex-row" id="Name">
        <div className="d-flex flex-column w-50 m-2">
        <Form.Label>Username</Form.Label>
        <InputGroup hasValidation>
                        <Form.Control
                            type="text"
                            name='username'
                            id="Username"
                            value={formData.username}
                            onChange={handleChanges}
                            placeholder="Enter Username"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid" className='errors'>
                            Please provide Username
                        </Form.Control.Feedback>
                    </InputGroup>
       
        </div>
       
        <div className="d-flex flex-column w-50 m-2">
        <Form.Label>Phone Number</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="number"
                            name='number'
                            id="number"
                            value={formData.number}
                            onChange={handleChanges}
                            placeholder="Enter Number"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid" className='errors'>
                            Please provide Phone Number
                        </Form.Control.Feedback>
                    </InputGroup>
         
        </div>
      </div>
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
                        <Form.Control.Feedback type="invalid" className='errors'>
                            Please provide email address
                        </Form.Control.Feedback>
                    </InputGroup>
                </div>

                <div className="w-100 m-1">
                    <Form.Label>Password</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type={showPassword?"text":"password"}
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChanges}
                            placeholder="Enter Password"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid" className='errors'>
                            Please provide password
                        </Form.Control.Feedback>
                    </InputGroup>
                </div>

                <div className="w-100 m-1">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type={showPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChanges}
                            placeholder="Confirm Password"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid" className='errors'>
                            Please confirm password
                        </Form.Control.Feedback>
                    </InputGroup>
                  
                    <Form.Group className="m-2">
        <Form.Check type="checkbox" value={showPassword} onChange={handleCheckboxChange} label="Show Password"/>
      </Form.Group>
                </div>

                <div className="w-100 mt-3 ms-1">
                    <Button variant="primary" type='submit' className='w-100'>Register</Button>
                </div>
                <p>Already have an account? <a href='../LoginPage/Login.jsx'>Login</a></p>
            </Form>
            <ToastContainer />
        </div>
    )
}

export default Registration;
