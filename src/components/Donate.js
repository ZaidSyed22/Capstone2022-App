import React from 'react'
import '../css/Donate.css';
import Card from "react-bootstrap/Card";


 function Donate() {
  return (

    <div id="donateBody">
<div className="w-responsive text-center mx-auto p-3 mt-2" id="donateCard">
<Card className="text-center">
  <Card.Body>
    <Card.Title>🙏❤️Support the Devs❤️🙏</Card.Title>
    <Card.Text>
      <p class="text-small">
      We hope you found our app helpful and unique. If you want us to 
          expand on it in the future. Any and all support is greatly appreciated!
      </p>
      <b></b>
      <p class="text-small">
      Future ideas but not limited to: PassportAuth to login via SocialMedia, Sessions, Error Handling, etc...
      </p>
      <b></b>
    </Card.Text>
  </Card.Body>
  <form action="https://www.paypal.com/donate" method="post" target="_top">
          <input type="hidden" name="business" value="DV5SVBC7EFYHN" />
          <input type="hidden" name="no_recurring" value="1" />
          <input type="hidden" name="currency_code" value="USD" />
          <div className="donate-button">
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          </div>
          <img alt="" border="0" src="https://www.paypal.com/en_CA/i/scr/pixel.gif" width="1" height="1" />
        </form>
</Card>

</div>
</div>
  )
}

export default Donate