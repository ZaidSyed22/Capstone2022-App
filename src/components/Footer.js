import React from 'react'
import { 
  Navbar as NB,
  Container,
 
} from 'react-bootstrap';
import '../css/Footer.css'



function Footer() {
  return (
    <div class="footer-spacing" id='footer'>
    <NB bg="dark" variant="dark" fixed="bottom" >
      <Container fluid>
            <p className='footer-text'><b>About Us:</b>
                <li>Aim</li>
                <li>Vision</li>
                <li>Sponsers</li>
            </p>
      </Container>
      <Container fluid>
            <p className='footer-text'><b>Contact Us:</b>
                <li>Sam Moon</li>
                <li>Daniel Donato</li>
                <li>Zaid Syed</li>
            </p>
      </Container>
      <Container fluid>
            <p className='footer-text'><b>Social Media:</b>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Instagram</li>
            </p>
      </Container>
      <Container fluid>
            <p className='footer-text'><b>Copyright © 2022. All Rights Reserved.</b></p>
      </Container>
    </NB>
    </div>
  )
}

export default Footer;