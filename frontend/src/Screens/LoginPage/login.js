import { Form, Button, Row, Col, Card, Container } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Axios from 'axios'
import './LoginPage.css' 
import { useContext, useEffect, useState } from 'react'
import { Store } from '../../Store'

function Loginpage ()  {
    const navigate = useNavigate();
    const { search } = useLocation();
    const redirectInUrl = new URLSearchParams(search).get('redirect');
    const redirect = redirectInUrl ? redirectInUrl : '/'; 

const [Email, setEmail] = useState('');
const [Password, setPassword] = useState(''); 

const {state, dispatch: ctxDispatch } = useContext(Store);
const { userInfo } = state; 

const submitHandler = async(e) => {
    e.preventDefault();
    try {
        const { data } = await Axios.post('/api/users/signin', {
            Email,
            Password,
        });
        ctxDispatch({type: 'USER_SIGNIN', payload: data })
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate(redirect || '/');
        console.log(data);
    } catch (error) {
        alert('Invalid Email or Password');
    }
};
useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]); 
 
    return (
        <div class='container'>
        <div class='row'>
        <div class='col'>
            <div className='column'>
                <h1>Hi there</h1>
            </div>
        </div>
        <div class='col'>
            <Container className="small-container">
        <div className='loginContainer'>
            <h1>Login</h1>
        <Form onSubmit = {submitHandler}>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
                type="Email" 
               // value={Email}
                placeholder="Enter email" 
                //onChange={(e) => setEmail(e.target.value)}
             />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
                type="Password" 
                required
               // value={Password} 
                placeholder="Password" 
                //onChange={(e) => setPassword(e.target.value)}
            />
            </Form.Group>
            
            
                <Button  variant="primary" type="submit">
                Sign In
                </Button>
            
        </Form>
            <Row className="py-3">
                <Col>
                If you are new user ? <Link to="/register">Register Here</Link>
                </Col>
            </Row>
        </div>
        </Container>
        </div>
        </div>
        </div>
    
    )
}

export default Loginpage
