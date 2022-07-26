import React from 'react'
import '../css/Donate.css';


 function Donate() {
  return (
    <div className="donate-page">
      <div>
        <h2 class="text-medium"><b>🙏❤️Support the Devs❤️🙏</b></h2>
        <p class="text-small">
          We hope you found our app helpful and unique. If you want us to 
          expand on it in the future. Any and all support is greatly appreciated!
        </p>
        <b>
        </b>
        <p class="text-small">
          Future ideas but not limited to: PassportAuth to login via SocialMedia, Sessions, Error Handling, etc...
        </p>
        <b>
        </b>
        <form action="https://www.paypal.com/donate" method="post" target="_top">
          <input type="hidden" name="business" value="DV5SVBC7EFYHN" />
          <input type="hidden" name="no_recurring" value="1" />
          <input type="hidden" name="currency_code" value="USD" />
          <div className="donate-button">
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
          </div>
          <img alt="" border="0" src="https://www.paypal.com/en_CA/i/scr/pixel.gif" width="1" height="1" />
        </form>
      </div>
    </div>
  )
}

export default Donate