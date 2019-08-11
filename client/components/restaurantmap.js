import React from 'react'
import {withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps'
import {RestaurantMarker} from './restmarkers'
import {AutoComplete} from './autocomplete'
import {MapDirectionsRenderer} from './directionsrenderer'

const RestaurantMap = withScriptjs(
  withGoogleMap(props => {
    const markers = props.restaurants.map(restaurant => (
      <RestaurantMarker key={restaurant.id} restaurant={restaurant} />
    ))

    return (
      <GoogleMap defaultZoom={12} center={{lat: 40.70454, lng: -74.009468}}>
        {markers}
        <MapDirectionsRenderer
          restaurants={props.restaurants}
          origin={props.origin}
          destination={props.destination}
        />
      </GoogleMap>
    )
  })
)

export default RestaurantMap
