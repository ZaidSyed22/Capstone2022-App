import React from "react";
import "../css/Home.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Login from "./Login";

function Home() {
  return (
    <div id="homeBody">
    <div className="w-responsive text-center mx-auto p-3 mt-2" id="homeCard">
      <Card className="text-center">
        <Card.Body id="cardBody">
          <Card.Title class="text-large">Welcome to ProfitRain</Card.Title>
          <Card.Text>
            <p class="text-small">
              This app was created for people who invest (or hope to invest) in
              real estate but may not necessarily know the calcalutions that one
              needs to succeed in real estate.
            </p>
            <b></b>
            <p class="text-small">
              In our app, an investor can put in basic property information,
              such as, address, price, size, units, rent/sf, property class, &
              property class.
            </p>
            <b></b>
          </Card.Text>
        </Card.Body>
      </Card>

    </div>
          <Login />
          </div>
  );
}

export default Home;
