import React, {useState} from 'react'
import {Marker, InfoWindow} from 'react-google-maps'

export default class RestaurantMarker extends React.Component {
  constructor() {
    super()
    this.state = {
      selected: false
    }
  }
  render() {
    // console.log(this.state)
    return (
      <Marker
        position={{
          lat: parseFloat(this.props.restaurant.longitude),
          lng: parseFloat(this.props.restaurant.latitude)
        }}
        icon="https://i.imgur.com/OvXlcgDt.png"
        onClick={() => {
          this.setState({selected: true})
        }}
      />
    )
  }
}
