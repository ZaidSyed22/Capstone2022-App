import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Navbar.css';
import { 
  Navbar as NB,
} from 'react-bootstrap';
import logo from '../assets/logoOne.png';


// Navbar function for Home, 
function Navbar() {
  return (
    <div id="navbar">
    <NB.Brand><img src={logo} alt='logo' width="250" height="79"/></NB.Brand>
    <div><NavLink to= "/">Home</NavLink></div>  
    <div><NavLink to= "/PropertyInput.js">Property Input</NavLink></div>
    {/* <div><NavLink to= "/Properties.js">Properties</NavLink></div> */}
    <div><NavLink to= "/deals">Deals</NavLink></div>
    <div><NavLink to= "./Login.js">Login</NavLink></div>
</div>
)
}


export default Navbar;