import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Navbar.css';


// Navbar function for Home, 
function Navbar() {
  return (
    <div id="navbar">
    <div><NavLink to= "/">Home</NavLink></div>  
    <div><NavLink to= "/PropertyInput.js">Property Input</NavLink></div>
    <div><NavLink to= "/Properties.js">Properties</NavLink></div>
    <div><NavLink to= "./map/Map.js">Map</NavLink></div>
    <div><NavLink to= "./add path">...Additional Route...</NavLink></div>
</div>
)
}


export default Navbar;