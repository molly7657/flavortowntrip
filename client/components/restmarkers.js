import React, {useState} from 'react'
import {Marker, InfoWindow} from 'react-google-maps'
import Faker from 'Faker'

export const RestaurantMarker = props => {
  const [selectedDiner, setSelectedDiner] = useState(null)
  return (
    <div>
      <Marker
        position={{
          lat: parseFloat(props.restaurant.longitude),
          lng: parseFloat(props.restaurant.latitude)
        }}
        icon="https://i.imgur.com/OvXlcgDt.png"
        onClick={() => {
          setSelectedDiner(props.restaurant)
        }}
      />

      {selectedDiner && (
        <InfoWindow
          position={{
            lat: parseFloat(selectedDiner.longitude),
            lng: parseFloat(selectedDiner.latitude)
          }}
          onCloseClick={() => {
            setSelectedDiner(null)
          }}
        >
          <div>
            <h2>{selectedDiner.restaurant}</h2>
            <h4>
              {selectedDiner.city}, {selectedDiner.state}
            </h4>
          </div>
        </InfoWindow>
      )}
    </div>
  )
}
