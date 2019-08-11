import React, {useState} from 'react'
import {Marker, InfoWindow} from 'react-google-maps'

export const RestaurantMarker = props => {
  const [selectedDiner, setSelectedDiner] = useState(null)
  return (
    <div>
      <Marker
        position={{
          lat: parseFloat(props.restaurant.longitude),
          lng: parseFloat(props.restaurant.latitude)
        }}
        icon="https://i.imgur.com/zDwd9oD.png"
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
          <div className="infowindow">
            <img
              height="75"
              widthh="75"
              align="middle"
              src="https://pbs.twimg.com/profile_images/655846528721027072/21ybkuMC_400x400.png"
              className="guy"
            />
            <h4>{selectedDiner.restaurant}</h4>
            <p>
              {selectedDiner.city}, {selectedDiner.state}
            </p>
            <input type="checkbox" value="add" name="add" />
            <label htmlFor="add">Add to Trip</label>
          </div>
        </InfoWindow>
      )}
    </div>
  )
}
