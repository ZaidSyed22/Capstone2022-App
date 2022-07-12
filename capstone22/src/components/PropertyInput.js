import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import { MDBContainer } from 'mdbreact'
import '../css/PropertyInput.css'

export default function PropertyInput() {
  return (
    <MDBContainer>
    <div className="w-responsive text-center mx-auto p-3 mt-2">
      
    <Card className="text-center">
    <Card.Header>Input Deal Terms</Card.Header>
    <Card.Body>
    <Form>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>
  
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Price</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Rent per SF</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control aria-label="rent will have cents" />
            <InputGroup.Text>/sf</InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Holding Period</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control aria-label="Sqaure Footage" />
            <InputGroup.Text>years</InputGroup.Text>
          </InputGroup>
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Square Footage</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control aria-label="Sqaure Footage" />
            <InputGroup.Text>SF</InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Units</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control aria-label="Sqaure Footage" />
            <InputGroup.Text>Units</InputGroup.Text>
          </InputGroup>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Card.Body>
    </Card>
    </div>
    </MDBContainer>
  )
}
