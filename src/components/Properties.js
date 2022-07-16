import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { MDBContainer } from 'mdbreact'
import Table from 'react-bootstrap/Table';
import Chart from './Chart';

import { useContext } from 'react'
import { OutputContext } from "../context/OutputContext";

export default function Properties() {

  const {
    propertyIncome,
    propertyCashFlows,
    propertyNpv,
    years,
  } = useContext(OutputContext);

  return (

    <MDBContainer>
      <div className="w-responsive text-center mx-auto p-3 mt-2">

      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Property</Card.Title>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Purchase Price</th>
                    <th>Gross Rent</th>
                    <th>Cap Rate</th>
                    <th>$/SF</th>
                    <th>$/Unit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>purchasePrice</td>
                    <td>grossRent</td>
                    <td>capRate</td>
                    <td>$/sf</td>
                    <td>$/unit</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Net Present Value</Card.Title>
              <Card.Text>

                Based on your assumptions above, below is the profit (or loss) you'd generate
                from pursuing this deal:
                <br/><br/>
                {propertyNpv.toLocaleString('us-US', {style: 'currency', currency: 'USD'})}

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Projected Income</Card.Title>
              <Card.Text>
                <Chart/>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </div>
  </MDBContainer>



  )
}
