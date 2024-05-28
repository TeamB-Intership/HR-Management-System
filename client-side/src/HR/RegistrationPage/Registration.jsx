import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import pic from "./6310507.jpg"
import "./Registration.css";
import InputGroup from 'react-bootstrap/InputGroup';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

const Registration = () => {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChanges = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, confirmPassword } = formData;

        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            setValidated(true);
            return;
        }

        const postData = { email, password };
        axios
            .post("URL", postData)
            .then((result) => {
                console.log(result);
                toast.success("Registration successful");
            })
            .catch((error) => {
                console.log(error);
                toast.error("Registration failed");
            });

        setFormData({
            email: "",
            password: "",
            confirmPassword: ""
        });
        setValidated(false);
    };

    return (
        <div className="m-1 d-flex justify-content-center align-items-center vh-100 registrationPage">
            <img src={pic} alt='registerpic' className='h-75 w-25' />
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <h1>Registration Page</h1>

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

                <div className="w-100 m-1">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup hasValidation>
                        <Form.Control
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChanges}
                            placeholder="Confirm Password"
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please confirm password
                        </Form.Control.Feedback>
                    </InputGroup>
                </div>

                <div className="w-100 mt-3 ms-1">
                    <Button variant="primary" type='submit' className='w-100'>Register</Button>
                </div>
                <p>Already have an account? <a href='./Login.jsx'>Login</a></p>
            </Form>
            <ToastContainer />
        </div>
    )
}

export default Registration;
