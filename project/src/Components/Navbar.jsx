import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function NavBar(){   
     return (
        <>
        <Navbar className='nav' bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
          <Navbar.Brand className="comp" href="/home"> Home </Navbar.Brand>
            <Nav.Link className="comp" href="/register"> Register </Nav.Link>
            <Nav.Link className="comp" href="/login"> Login </Nav.Link>
            <Nav.Link className="comp" href="/products"> Our Products </Nav.Link>
            <Nav.Link className="comp" href="/add"> Add Products </Nav.Link>
            <Nav.Link className="comp" href="/contact"> Contact Us  </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
);
};
