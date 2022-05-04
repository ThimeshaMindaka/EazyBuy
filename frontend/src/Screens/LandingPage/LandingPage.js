import React from 'react'
import { Container, Row, Button, Image } from 'react-bootstrap'
import "./LandingPage.css"

function Landingpage() {
    
    return (
        
        <div className="main">
        <Container>
        <Row>
            <div className="lp-text">
                <div>
                    
                    <h1 className="title">Welcome to Eazy Buy..</h1>
                    <p className="subtitle">Select Your all   !!!!!</p>
                </div>
                <div className="buttonContainer">
                    <a href='/login'>
                        <Button size='lg' className='landingbutton'>Sign In</Button>
                    </a>

                    <a href='/register'>
                        <Button size='lg' className='landingbutton' variant="outline-primary">Sign Up</Button>
                    </a>
                    
                </div>
            </div>
        </Row>
        </Container>
    </div>
        
    )
}

export default Landingpage
