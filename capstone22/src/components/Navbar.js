import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Navbar.css';


// Navbar function for Home, 
function Navbar() {
  return (
    <div id="navbar">
    <div><NavLink to= "/">Home</NavLink></div>  
    <div><NavLink to= "./add path">...One...</NavLink></div>
    <div><NavLink to= "./add path">...Two...</NavLink></div>
    <div><NavLink to= "./add path">...Three...</NavLink></div>
    <div><NavLink to= "./add path">...Four...</NavLink></div>
</div>
)
}


export default Navbar;