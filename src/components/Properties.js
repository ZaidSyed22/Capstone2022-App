import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { MDBContainer } from 'mdbreact'
import Table from 'react-bootstrap/Table';
import Chart from './Chart';

import { useContext } from 'react'
import { InputContext } from "../context/InputContext";
import { OutputContext } from "../context/OutputContext";

export default function Properties() {

  const {
    vacancyRate,
    capex,
    capRate,
    costOfCapital,
    salePrice
  } = useContext(InputContext);

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
              <Card.Title>Assumptions</Card.Title>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Vacancy Rate</th>
                    <th>Capex (% NOI)</th>
                    <th>Exit Cap Rate</th>
                    <th>Cost of Capital</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{(vacancyRate*100).toFixed(1)}%</td>
                    <td>{(capex*100).toFixed(1)}%</td>
                    <td>{(capRate*100).toFixed(1)}%</td>
                    <td>{(costOfCapital*100).toFixed(1)}%</td>
                  </tr>
                </tbody>
              </Table>
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

        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Net Present Value</Card.Title>
              <Card.Text>

                Below is the profit (or loss) generated from this deal:
                <br/><br/>
                {propertyNpv.toLocaleString('us-US', {style: 'currency', currency: 'USD'})}

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Sale Price</Card.Title>
              <Card.Text>

                Below is the estimated sale price at the end of your
                holding period:
                <br/><br/>
                {salePrice.toLocaleString('us-US', {style: 'currency', currency: 'USD'})}

              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        

      </Row>

    </div>
  </MDBContainer>



  )
}
