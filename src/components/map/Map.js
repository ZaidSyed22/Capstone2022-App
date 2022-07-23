import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { defaultMarker } from "./marker";
import { popupContent, popupText } from "./popup";
import { MDBContainer } from 'mdbreact'
import '../../css/Map.css'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { useContext } from "react";
import { InputContext } from "../../context/InputContext";

export default function Map() {
  const {
    address,
    city,
    state,
    zip,
    coordinates,
  } = useContext(InputContext);

  function FlyMapTo() {
    const map = useMap()

    useEffect(() => {
        map.setView(coordinates)
    },)

  }

  return (
    
    <MDBContainer>
    <div class='leaflet-container'>
      <MapContainer center={coordinates} zoom={13} scrollWheelZoom={false}>

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}>
          <Popup>
            {address}
          </Popup>
        </Marker>
        <FlyMapTo/>
      </MapContainer>
      </div>
      </MDBContainer>


  
  )
}
