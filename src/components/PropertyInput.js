import React from 'react'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import { MDBContainer } from 'mdbreact'
import '../css/PropertyInput.css'

import CalcCashFlows from './mathFunctions/CalcCashFlows'
import CalcIncome from './mathFunctions/CalcIncome'
import CalcNpv from './mathFunctions/CalcNpv'

import { useContext } from "react";
import { InputContext } from "../context/InputContext";
import { OutputContext } from "../context/OutputContext";

export default function PropertyInput() {

  const {
    address,
    city,
    state,
    zip,
    squareFeet,
    units,                  
    rentPsf,
    rentGrowth,
    capex,
    vacancyRate,
    period,
    purchasePrice,
    capRate,
    costOfCapital,
    updateAddress,
    updateCity,
    updateState,
    updateZip,
    updateSquareFeet,
    updateUnits,
    updateRentPsf,
    updateRentGrowth,
    updateCapex,
    updateVacancyRate,
    updatePeriod,
    updatePurchasePrice,
    udpateCapRate,
    updateCostOfCapital
  } = useContext(InputContext);

  const {
    propertyIncome,
    propertyCashFlows,
    propertyNpv,
    years,
    updatePropertyIncome,
    updatePropertyCashFlows,
    updatePropertyNpv,
    updateYears
  } = useContext(OutputContext);

  // when button is clicked, calculate output values and update state
  function handleClick() {
    let incomeObj = {}
    incomeObj = CalcIncome(rentPsf * squareFeet, rentGrowth/100, capex, vacancyRate/100, period)
    updateYears(incomeObj.yearsArray)
    updatePropertyIncome(incomeObj.incomeArray)

    // default cap rate for now
    let cashFlows = CalcCashFlows(0.05, incomeObj.incomeArray)
    updatePropertyCashFlows(cashFlows)

    let npv = CalcNpv(purchasePrice, cashFlows, costOfCapital/100)
    updatePropertyNpv(npv)
  }

  return (
    <MDBContainer>
    <div className="w-responsive text-center mx-auto p-3 mt-2">
      
    <Card className="text-center">
    <Card.Header>Input Deal Terms</Card.Header>
    <Card.Body>
    <Form>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" onChange={(e) => updateAddress(e.target.value)} />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control onChange={(e) => updateCity(e.target.value)}/>
        </Form.Group>
  
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose..." onChange={(e) => updateState(e.target.value)}>
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Zip</Form.Label>
          <Form.Control onChange={(e) => updateZip(e.target.value)}/>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Purchase Price</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control type="number" onChange={(e) => updatePurchasePrice(e.target.valueAsNumber)} aria-label="Dollar amount (with dot and two decimal places)" />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Rent</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control type="number" onChange={(e) => updateRentPsf(e.target.valueAsNumber)} />
            <InputGroup.Text>/sf</InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Holding Period</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control type="number" onChange={(e) => updatePeriod(e.target.valueAsNumber)} />
            <InputGroup.Text>/yrs</InputGroup.Text>
          </InputGroup>
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Square Footage</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control type="number" onChange={(e) => updateSquareFeet(e.target.valueAsNumber)} aria-label="Sqaure Footage" />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Number of Units</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control type="number" onChange={(e) => updateUnits(e.target.valueAsNumber)} aria-label="Sqaure Footage" />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Cost of Capital</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control type="number" onChange={(e) => updateCostOfCapital(e.target.valueAsNumber)} />
            <InputGroup.Text>%</InputGroup.Text>
          </InputGroup>
        </Form.Group>
      </Row>

      <Row className="mb-3">
      <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Vacancy Rate</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control type="number" onChange={(e) => updateVacancyRate(e.target.valueAsNumber)} />
            <InputGroup.Text>%</InputGroup.Text>
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Annual Capex</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Text>$</InputGroup.Text>
            <Form.Control type="number" onChange={(e) => updateCapex(e.target.valueAsNumber)} aria-label="Sqaure Footage" />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Rent Growth</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control type="number" onChange={(e) => updateRentGrowth(e.target.valueAsNumber)} />
            <InputGroup.Text>%</InputGroup.Text>
          </InputGroup>
        </Form.Group>
      </Row>

      <Button variant="primary" type="button" onClick= { handleClick } >
        Submit
      </Button>
    </Form>
    </Card.Body>
    </Card>
    </div>
    </MDBContainer>
  )
}
