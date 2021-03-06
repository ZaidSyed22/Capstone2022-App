import React, {useState} from 'react'
import { useContext } from "react";
import { InputContext } from "../../context/InputContext";
import { OutputContext } from "../../context/OutputContext";
import Button from 'react-bootstrap/Button'
import { Redirect } from 'react-router-dom';

const axios = require('axios').default;

export default function SaveButton() {
  const[direct,setDirect] = useState(false)

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
        propertyType,
        propertyClass,
        period,
        purchasePrice,
        capex,
        vacancyRate,
        capRate,
        costOfCapital,
        salePrice,
        coordinates
    } = useContext(InputContext);
  
    const {
        propertyIncome,
        propertyCashFlows,
        propertyNpv,
        years
    } = useContext(OutputContext);    

    //Save to the databse
    async function handleSave (){
      await axios.post("http://localhost:2022/saveDeal", {
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
        capex: capex,
        vacancyRate: vacancyRate,
        capRate: capRate,
        costOfCapital: costOfCapital,
        salePrice: salePrice,
        propertyIncome: propertyIncome,
        propertyCashFlows: propertyCashFlows,
        propertyNpv: propertyNpv,
        years: years,
        coordinates: coordinates,
      }).then(() => {
        setDirect(true)
        alert("Calculation saved!")
      })
    } 

    if (direct) {
      return <Redirect to='/deals'/>;}

  return (
    
    <Button variant="secondary" type="button" onClick= { handleSave } >
    Save
   </Button>

  )
}
