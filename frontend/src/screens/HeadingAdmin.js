import React from 'react';
//import { Link } from 'react-router-dom';
import { Navbar, Nav, NavbarBrand, Container } from 'reactstrap';

export const Heading = () => {
  return (
    <Navbar className="mt-4" color="dark" dark>
      <Container>
        <NavbarBrand href="/">
          <h1>Customer Feedbacks</h1>
        </NavbarBrand>
        <Nav></Nav>
      </Container>
    </Navbar>
  );
};
