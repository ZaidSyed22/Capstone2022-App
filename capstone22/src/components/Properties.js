import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { MDBContainer } from 'mdbreact'
import Table from 'react-bootstrap/Table';


export default function Properties() {


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
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </div>
  </MDBContainer>



  )
}
