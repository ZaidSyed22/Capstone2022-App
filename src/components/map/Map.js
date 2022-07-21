import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { defaultMarker } from "./marker";
import { popupContent, popupText } from "./popup";
import { MDBContainer } from 'mdbreact'
import '../../css/Map.css'

export default function Map() {
  const position = [0, 0] // need to store as state

  return (
    
    <div class='leaflet-container'>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  
  )
}
