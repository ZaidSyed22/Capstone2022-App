import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logoTwo.png';


// Navbar function for Home, 
function NavBar() {
  return (
    <Navbar bg="light" expand="lg" id="navbar">
    <Container className='justify-content-center'>
      <Navbar.Brand href="#home"><img src={logo} alt='logo'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav 
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
          <Nav.Link href= "/" id='navButton'>Home</Nav.Link>
          <Nav.Link href= "/signup" id='navButton'>Signup</Nav.Link>
          <Nav.Link href= "/calculator"  id='navButton'>Calculator</Nav.Link>
          <Nav.Link href="/deals"  id='navButton'>Deals</Nav.Link>
          <Nav.Link href="/donate" id='navButton'>Support the Devs</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar>
)
}


export default NavBar;