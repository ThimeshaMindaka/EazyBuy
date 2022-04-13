import { Form, Button, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './LoginPage.css' 

function Loginpage ()  {

    return (
        <div class='container'>
        <div class='row'>
        <div class='col'>
            <div className='column'>
                <h1>Hi there</h1>
            </div>
        </div>
        <div class='col'>
        <div className='loginContainer'>
            <h1>Login</h1>
        <Form>
            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
                type="email" 
                //value={email}
                placeholder="Enter email" 
                //onChange={(e) => setEmail(e.target.value)}
             />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
                type="password" 
                required
               // value={password} 
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
        </div>
        </div>
        </div>
    
    )
}

export default Loginpage
