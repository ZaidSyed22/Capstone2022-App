import React from 'react'
import NavBar from './NavBar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

// PageTemplate function renders whatever route we are on
function Pagetemplate(props) {
  return (
    <div>
        <NavBar />
        {props.children} 
        <Footer />  
    </div>
  )
}


export default Pagetemplate;