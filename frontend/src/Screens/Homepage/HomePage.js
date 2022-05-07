import React, { useState , useEffect} from 'react';
import { Container, Row, Button, Image } from 'react-bootstrap'
import "./HomePage.css"
import {Link , useNavigate , useLocation} from "react-router-dom"

function Homepage(props) {
    let navigate = useNavigate()
    const location = useLocation();

    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userInfo'))
        setUserData(userData)
        console.log("uD" , userData);
    }, [])

    
    return (
        
        <div className="main">
        <Container>
        <Row>
            <div className="lp-text">
                <div>
                    
                    <h1 className="title">Welcome to Eazy Buy..</h1>
                    <p className="subtitle">Home Page  !!!!!</p>
                </div>
                <div className="buttonContainer">
                        <Button onClick={()=> navigate('/profile')} size='lg' className='landingbutton'>{userData?.UserName}</Button>
                    
                </div>
            </div>
        </Row>
        </Container>
    </div>
        
    )
}

export default Homepage
