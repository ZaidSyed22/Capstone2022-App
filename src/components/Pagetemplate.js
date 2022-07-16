import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

// PageTemplate function renders whatever route we are on
function Pagetemplate(props) {
  return (
    <div>
        <Navbar />
        {props.children} 
        <Footer />  
    </div>
  )
}


export default Pagetemplate;