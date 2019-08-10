import React from 'react'
import {Marker} from 'react-google-maps'

export default class RestaurantMarker extends React.Component {
  render() {
    console.log(
      parseFloat(this.props.restaurant.latitude),
      parseFloat(this.props.restaurant.longitude)
    )
    return (
      <Marker
        position={{
          lat: parseFloat(this.props.restaurant.longitude),
          lng: parseFloat(this.props.restaurant.latitude)
        }}
        icon="https://i.imgur.com/OvXlcgDt.png"
      />
    )
  }
}
