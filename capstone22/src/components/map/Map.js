import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { defaultMarker } from "./marker";
import { popupContent, popupText } from "./popup";
import { MDBContainer } from 'mdbreact'
import '../../css/Map.css'

export default function Map() {
    const center=[51.505, -0.09];

  return (

    <MDBContainer>
        <div className="w-75 p-3" id='map'>

            <MapContainer center={center} zoom={15}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={center} icon={defaultMarker}>
            <Popup className="request-popup">
                <div style={popupContent}>
                <span style={popupText}>
                nothing yet
                </span>
                </div>
            </Popup>
            </Marker>
        </MapContainer>

        </div>
    </MDBContainer>
  )
}
