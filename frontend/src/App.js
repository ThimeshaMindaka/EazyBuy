import './App.css';
import React from 'react';
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

function App() {
  
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
    </Routes>
    </main>
  </div>
  </BrowserRouter>
  );
}

export default App;
