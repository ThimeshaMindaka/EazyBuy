import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavbarBrand, Container } from 'reactstrap';

export const Heading = () => {
  return (
    <Navbar className="mt-4" color="dark" dark>
      <Container>
        <NavbarBrand href="/">
          <h1>All my Feedbacks</h1>
        </NavbarBrand>
        <Nav>
          <NavItem>
            <Link className="btn btn-primary" to="/add">
              Add new Feedback
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/admin" className="btn btn-danger ml-2">
              Admin
            </Link>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
};
