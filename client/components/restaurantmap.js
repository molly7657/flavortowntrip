import React from 'react'
import {withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps'
import {RestaurantMarker} from './restmarkers'

const RestaurantMap = withScriptjs(
  withGoogleMap(props => {
    const markers = props.restaurants.map(restaurant => (
      <RestaurantMarker key={restaurant.id} restaurant={restaurant} />
    ))

    return (
      <GoogleMap defaultZoom={12} center={{lat: 40.70454, lng: -74.009468}}>
        {markers}
      </GoogleMap>
    )
  })
)

export default RestaurantMap
