import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import Form from "react-bootstrap/Form";
import { Bar } from "react-chartjs-2";
import { Redirect } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { defaultMarker } from "../map/popup";
import { popupContent, popupText } from "../map/popup";
import "../../css/SavedDeal.css";

const axios = require("axios").default;

export default function SavedDeal() {
  const [building, setBuilding] = useState([]);
  const [edit, setEdit] = useState(false);
  const [units, setUnits] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [progress, setProgress] = useState(false);
  const [postID, setPostID] = useState("");
  const [direct, setDirect] = useState(false);
  const [update, setUpdate] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:2022/deals`).then((res) => {
      setBuilding(res.data);
    });
  }, []);

  async function handlePost() {
await axios.put(`http://localhost:2022/editDeal/${postID}`,{
  units: units,
  propertyType: propertyType,
}).then((res) => {
 setUpdate(res.data)
})

if (setUpdate[0].city != null) {
  window.location.reload();
} 

  };

 async function handleDelete() {
    await axios.delete(`http://localhost:2022/delDeal/${postID}`,{})
    .then(() => {
 alert('Deleted!')
})
window.location.reload();
  };



  if (direct) {
    return <Redirect to='/deals'/>;}

  return (
    <div>
      {building.map((property, i) => {
        return (
          <div className='"justify-content-md-center'> 
            <div
              className="w-responsive text-center mx-auto p-3 mt-2"
              id="bldgBox"
            >
              <Card className="text-center">
                <Card.Header>
                  <Container>
                    <Row id="propertyInfo">
                      <Col xs={4}>
                        Submitted by {property.username} on {property.createdAt}
                      </Col>
                      <Col xs={4}>
                        Address: {property.address}, {property.city}
                      </Col>
                      <Col xs={2}>Size: {(property.squareFeet * 1).toLocaleString('en-US')} square feet</Col>
                      <Col xs={2}>Unit(s): {property.units}</Col>
                    </Row>
                  </Container>
                </Card.Header>
                <Card.Body>
                  <br></br>
                  <Row>
                    <Col xs={2}></Col>
                    <Col xs={8}>
                      <Card className="text-center">
                        <Card.Body>
                          <div className="leaflet-container">
                            <MapContainer
                              center={property.coordinates}
                              zoom={15}
                              scrollWheelZoom={false}
                            >
                              <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                              />
                              <Marker position={property.coordinates}>
                                <Popup>{property.address}</Popup>
                              </Marker>
                            </MapContainer>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col xs={2}></Col>
                  </Row>
                  <br></br>
                  <Row xs={1} md={2} className="g-4" is>
                    <Col>
                      <Card className="text-center">
                        <Card.Body>
                          <div id="cardTitles">Projection Summary</div>
                          <br></br>
                          Purchase Price: {(property.purchasePrice * 1).toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })} | Type:{" "}
                          {property.propertyType} | Class:{" "}
                          {property.propertyClass}
                          <Table striped bordered hover size="sm">
                            <thead>
                              <tr>
                                <th>Cap Rate</th>
                                <th>Hold Period</th>
                                <th>Rent PSF</th>
                                <th>Rent Growth</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>{(property.capRate * 100).toFixed(1)}%</td>
                                <td>{property.period} years</td>
                                <td>${property.rentPsf}/sf</td>
                                <td>{property.rentGrowth}%</td>
                              </tr>
                            </tbody>
                          </Table>
                          <br></br>
                          <div id="cardTitles">Assumptions</div>
                          <Table striped bordered hover size="sm">
                            <thead>
                              <tr>
                                <th>Exit Cap Rate</th>
                                <th>Vacancy Rate</th>
                                <th>Capex (% NOI)</th>
                                <th>Cost of Capital</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>{(property.capRate * 100).toFixed(1)}%</td>
                                <td>
                                  {(property.vacancyRate * 100).toFixed(1)}%
                                </td>
                                <td>{(property.capex * 100).toFixed(1)}%</td>
                                <td>
                                  {(property.costOfCapital * 100).toFixed(1)}%
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card className="text-center">
                        <Card.Body>
                          <div id="cardTitles">Projected Income</div>
                          <Card.Text>
                            <div>
                              <div className="chart">
                                <Bar
                                  data={{
                                    labels: building[i].years,
                                    datasets: [
                                      {
                                        label: "Operating Income less Capex",
                                        backgroundColor: "rgb(0, 139, 139, 1)",
                                        data: building[i].propertyIncome,
                                      },
                                    ],
                                  }}
                                />
                              </div>
                            </div>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card className="text-center">
                        <Card.Body>
                          <div id="cardTitles">Net Present Value</div>
                          <Card.Text>
                            Below is the profit (or loss) generated from this
                            deal:
                            <br />
                            <br />
                            {(property.propertyNpv * 1).toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card className="text-center">
                        <Card.Body>
                          <div id="cardTitles">Sale Price</div>
                          <Card.Text>
                            Below is the estimated sale price at the end of your
                            holding period:
                            <br />
                            <br />
                            {(property.salePrice * 1).toLocaleString("us-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                  <br></br>
                  {/* <Button
                    variant="info"
                    id="buttonEdit"
                    onClick={() => setEdit(!edit)}
                    aria-controls="example-collapse-text"
                    aria-expanded={edit}
                  >
                    edit
                  </Button>{" "}

                  <br></br>

                  <Collapse in={edit}>
                    <Form>
                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridUnits">
                          <Form.Label>Number of Units</Form.Label>
                          <Form.Control
                            type="number"
                            onChange={(e) => setUnits(e.target.valueAsNumber)}
                          />
                        </Form.Group>

                        <Form.Group as={Col}>
                          <Form.Label>Property Type</Form.Label>
                          <Form.Select
                            defaultValue="Multifamily"
                            onChange={(e) => setPropertyType(e.target.value)}
                          >
                            <option>Multifamily</option>
                            <option>Office</option>
                            <option>Industrial</option>
                            <option>Retail</option>
                            <option>Senior Housing</option>
                            <option>Hotel</option>
                          </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col}>
                          <Form.Label>Post ID #: *</Form.Label>
                          <Form.Control
                            type="number"
                            onChange={(e) => setPostID(e.target.valueAsNumber)}
                          />
                        </Form.Group>
                      </Row>
                            <p id="instruction">*Your post ID can be found at the bottom right corner of the post.</p>
                      <br></br>

                      <Button variant="primary" type="submit" id="button" onClick={handlePost}>
                        Save
                      </Button>

                      <Button variant="warning" type="submit" id="button" onClick={() => setProgress(!progress)}>
                        Complete
                      </Button>

                      <Button variant="danger" type="submit" id="button" onClick={handleDelete}>
                        Delete
                      </Button>
                    </Form>
                  </Collapse> */}
                </Card.Body>

                <br></br>

                <Card.Footer>
                  <Container>
                    <Row id="propertyInfo">
                      <Col xs={4}>Updated: {property.updatedAt}</Col>
                      <Col xs={7}></Col>
                      <Col xs={1}>ID: {property.id}</Col>
                    </Row>
                  </Container>
                </Card.Footer>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
}
