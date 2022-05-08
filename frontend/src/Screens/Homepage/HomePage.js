import React, { useState , useEffect} from 'react';
import { Container, Row, Button, Image, Table } from 'react-bootstrap'
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
        
        
        <Container>
        <Row>
            <div className="lp-text">
                <br />
            <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan={2}>Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
               
            </div>
        </Row>
        </Container>
    
        
    )
}

export default Homepage
