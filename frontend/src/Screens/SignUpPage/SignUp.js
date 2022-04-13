import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SignUpPage() {


    /*const demo = () => {
            setName("Kaveesha")
            setNIC ("123456")
            setEmail("kaveesha@gmail.com")
            setPassword("kave1234")
            setConfirmPassword("kave1234")
            setPhone("1234556778")
            setAddress("Avissawella")
            setUserType("partner")
            setPic("kave.png")
        }*/
    return (
        <Container>
            <h1>Register a new Account</h1>
            <hr></hr>
            <div className="loginContainer">
            <Form>
            <Form.Group controlId="Name">
            <Form.Label>User Name</Form.Label>
            <Form.Control 
                type="UserName" 
                //value={UserName}
                placeholder="User Name" 
               // onChange={(e) => setUserName(e.target.value)}
             />
            </Form.Group>

            <Form.Group controlId="NIC">
            <Form.Label>First Name</Form.Label>
            <Form.Control 
                type="FirstName" 
                //value={FirstName}
                placeholder="First Name" 
                //onChange={(e) => setFirstName(e.target.value)}
             />
            </Form.Group>

            <Form.Group controlId="NIC">
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
                type="LasttName" 
                //value={LasttName}
                placeholder="Last Name" 
                //onChange={(e) => setLastName(e.target.value)}
             />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
                type="Email" 
                //value={Email}
                placeholder="Email Address" 
                //onChange={(e) => setEmail(e.target.value)}
             />
            </Form.Group>

            <Form.Group className="mb-3" controlId="Phone">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control 
                type="ContactNumber" 
                //value={ContactNumber} 
                placeholder="+(94)767783921" 
                //onChange={(e) => setPhone(e.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
                type="password" 
                //value={Password} 
                placeholder="Password" 
                //onChange={(e) => setPassword(e.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="ConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control 
                type="password" 
                //value={ConfirmPassword} 
                placeholder="Confirm Password" 
                //onChange={(e) => setConfirmPassword(e.target.value)}
            />
            </Form.Group>

                <Button  variant="primary" type="submit">
                Register
                </Button>
   
        </Form>
        <br />
            </div>
            </Container>
        
    )
}

export default SignUpPage
