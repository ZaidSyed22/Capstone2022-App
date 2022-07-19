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
import AssumptionsSelector from './AssumptionsSelector'

import { useContext } from "react";
import { InputContext } from "../context/InputContext";
import { OutputContext } from "../context/OutputContext";

import { Axios } from 'axios'
import { add } from 'mathjs'

export default function PropertyInput() {

  const {
      username,
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
      propertyType,
      propertyClass,
      updateAddress,
      salePrice,
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
      updateCapRate,
      updateCostOfCapital,
      updatePropertyType,
      updatePropertyClass,
      updateSalePrice
  } = useContext(InputContext);

  const {
    updatePropertyIncome,
    updateYears,
    updatePropertyNpv
  } = useContext(OutputContext);

  // when button is clicked, calculate output values and update state
  function handleClick() {
    // let's set the hidden assumptions
    let assumptionsObj = AssumptionsSelector(propertyClass)

    // update state variables
    updateVacancyRate(assumptionsObj.vacancyRate)
    updateCapex(assumptionsObj.capex)
    updateCapRate(assumptionsObj.capRate)
    updateCostOfCapital(assumptionsObj.costOfCapital)

    // calculate income per year
    let incomeObj = CalcIncome(rentPsf * squareFeet, rentGrowth/100, assumptionsObj.capex, assumptionsObj.vacancyRate, period)

    // store years and income per year in their state variables
    updateYears(incomeObj.yearsArray)
    updatePropertyIncome(incomeObj.incomeArray)

    //calculate exit/sale price (intermediate step)
    let exitPrice = incomeObj.incomeArray[incomeObj.incomeArray.length-1] / assumptionsObj.capRate
    updateSalePrice(exitPrice)

    // create a cashflows array (intermediate step)
    let cashFlowsArray = [...incomeObj.incomeArray]
    cashFlowsArray.push(exitPrice)

    // calculate npv
    let npv = CalcNpv(purchasePrice, cashFlowsArray, assumptionsObj.costOfCapital)
  
    // update npv state
    updatePropertyNpv(npv)
  }


  // saving to the databse
  function handleSave (){
    Axios.post("http://localhost:2022/saveDeal", {
      username: username,
      address: address,
      city: city,
      state: state,
      zip: zip,
      purchasePrice: purchasePrice,
      rentPsf: rentPsf,
      period: period,
      squareFeet: squareFeet,
      units: units,
      rentGrowth: rentGrowth,
      propertyType: propertyType,
      propertyClass: propertyClass,
    }).then(() => {
      alert("Calculation saved!")
    })
  } 


  return (
    <MDBContainer>
      <div className="w-responsive text-center mx-auto p-3 mt-2">
        <Card className="text-center">
          <Card.Header>Input Deal Terms</Card.Header>
          <Card.Body>
            <Form>

              <Row className="mb-3">
                <Form.Group className="mb-3">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="1234 Main St" onChange={(e) => updateAddress(e.target.value)} />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>City</Form.Label>
                  <Form.Control onChange={(e) => updateCity(e.target.value)}/>
                </Form.Group>
          
                <Form.Group as={Col}>
                  <Form.Label>State</Form.Label>
                  <Form.Control onChange={(e) => updateState(e.target.value)}>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Zip</Form.Label>
                  <Form.Control onChange={(e) => updateZip(e.target.value)}/>
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Rent PSF</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control type="number" onChange={(e) => updateRentPsf(e.target.valueAsNumber)} />
                    <InputGroup.Text>/sf</InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Square Footage</Form.Label>
                  <Form.Control type="number" onChange={(e) => updateSquareFeet(e.target.valueAsNumber)} />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Number of Units</Form.Label>
                  <Form.Control type="number" onChange={(e) => updateUnits(e.target.valueAsNumber)} />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>Purchase Price</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control type="number" onChange={(e) => updatePurchasePrice(e.target.valueAsNumber)} />
                  </InputGroup>
                </Form.Group>
                  
                <Form.Group as={Col}>
                  <Form.Label>Holding Period</Form.Label>
                  <InputGroup>
                    <Form.Control type="number" onChange={(e) => updatePeriod(e.target.valueAsNumber)} />
                    <InputGroup.Text>/yrs</InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>Rent Growth</Form.Label>
                  <InputGroup>
                    <Form.Control type="number" onChange={(e) => updateRentGrowth(e.target.valueAsNumber)} />
                    <InputGroup.Text>%</InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Row>

              <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Property Type</Form.Label>
                <Form.Select defaultValue="Multifamily" onChange={(e) => updatePropertyType(e.target.value)}>
                  <option>Multifamily</option>
                  <option>Office</option>
                  <option>Industrial</option>
                  <option>Retail</option>
                  <option>Senior Housing</option>
                  <option>Hotel</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Property Class</Form.Label>
                <Form.Select defaultValue="A" onChange={(e) => updatePropertyClass(e.target.value)}>
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                </Form.Select>
              </Form.Group>
              </Row>

              <Button variant="primary" type="button" onClick= { handleClick } >
                Submit
              </Button>

              <Button variant="secondary" type="button" onClick= { handleSave } >
                Save
              </Button>

            </Form>
          </Card.Body>
        </Card>
      </div>
    </MDBContainer>
  )
}
