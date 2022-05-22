import React from 'react';
import './App.css';
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes,Route } from "react-router-dom";
import LandingPage from './Screens/LandingPage/LandingPage';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap';
import Loginpage from './Screens/LoginPage/login';
import SignUpPage from './Screens/SignUpPage/SignUp';
import Homepage from './Screens/Homepage/HomePage';
import Profile from './Screens/Profile/Profile';
import ProfileUpdate from './Screens/ProfileUpdate/ProfileUpdate';
import { NavDropdown } from 'react-bootstrap';
import AddFeedback from './screens/AddFeedback';
import AllFeedback from './screens/AllFeedback';
import UpdateFeedback from './screens/UpdateFeedback';
import AdminViewFeedback from './screens/AdminViewFeedback';
import AdminUpdateDelete from './screens/AdminUpdateDeleteFeedback';


function App() {
 
  const [userData, setUserData] = useState(null);
    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userInfo'))
        setUserData(userData)
        console.log("uD" , userData);
    }, [])


  
  
  document.title = "Eazy Buy";
  return (
  <BrowserRouter>
  <div>
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Eazy Buy</Navbar.Brand>
          </LinkContainer>
          {userData ? ( <>
          if ({userData?.isAdmin === true}) {
            <LinkContainer to="/">
              <Navbar.Brand>Feedbacks</Navbar.Brand>
            </LinkContainer>
          }
            <NavDropdown title={userData?.UserName} id="nav-dropdown">
                      <LinkContainer to="/profile">
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                      </LinkContainer>
                        <NavDropdown.Divider />
                        <LinkContainer to="/logout">
                        <NavDropdown.Item>Logout</NavDropdown.Item>
                      </LinkContainer>
            </NavDropdown>
          </>):null}
        </Container>
      </Navbar>
      
    </header>
    <main>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/register" element={<SignUpPage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile-update" element={<ProfileUpdate />} />
      <Route path="/adminupdate/:id" exact component={AdminUpdateDelete} />
          <Route path="/admin" exact component={AdminViewFeedback} />
          <Route path="/add" exact component={AddFeedback} />
          <Route path="/update/:id" exact component={UpdateFeedback} />
          <Route path="/" exact component={AllFeedback} />
  
    </Routes>
    </main>
  </div>
  </BrowserRouter>
  );
}

export default App;
