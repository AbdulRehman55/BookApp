import React, { useState } from 'react'
import axios from 'axios'
import {Alert, Button, Col, Container, Form, Row} from "react-bootstrap";

const LoginPage = ({history}) => {
   // const history = useHistory()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    

    const loginHandler = async (e) => {

        e.preventDefault()

         const data = {
             name: name,
             password: password
        }
        console.log(data)
        if(data.name=="" || data.password=="") {
            
         window.alert("Username or Password cant be empty")
        }
        else{
       const response= await axios.post('http://localhost:4000/user/login', data)
       if(!response.data.token) window.alert('Username or Password is incorrect')
       else history.push('/books');
       
        }
    }
    
    return (
        <>
            <Container>
                <h1 className="shadow-sm text mt-5 p-3 text-center rounded"> Login</h1>
                <Row className="mt-5">
                    <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <Form onSubmit={loginHandler} method="POST" >
                            <Form.Group controlId="name">
                                <Form.Label>User Name</Form.Label>
                                <Form.Control 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                 type="name" 
                                 placeholder="Enter name" />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                  value={password}
                                  onChange={(e) => setPassword(e.target.value)}
                                  type="password" placeholder="Password"/>
                            </Form.Group>
                            <a href='/register'>Don't have an account?</a>
                              <br/>
                              <br/>
                            <Button variant="primary btn-block" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <h6 className="mt-5 p-5 text-center text-secondary ">Copyright ?? 2022 Abdul Rehman. All Rights Reserved.</h6>
            </Container>
        </>
    );
};

export default LoginPage;