import {DirectionsRenderer} from 'react-google-maps'
import React, {useState, useEffect} from 'react'

export function MapDirectionsRenderer(props) {
  const [directions, setDirections] = useState(null)
  const [error, setError] = useState(null)
  useEffect(() => {
    const {restaurants, travelMode} = props
    const origin = props.origin
    const destination = props.destination
    // const waypoints = restaurants
    //   .filter(
    //     p =>
    //       props.origin.lat - 0.1 <=
    //       parseFloat(p.longitude) <=
    //       props.origin.lat + 0.1
    //   )
    //   .map(p => ({
    //     location: {lat: parseFloat(p.longitude), lng: parseFloat(p.latitude)},
    //     stopover: true
    //   }))

    const directionsService = new window.google.maps.DirectionsService()
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: 'DRIVING',
        waypoints: props.waypoints,
        optimizeWaypoints: true
      },
      (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          setDirections(result)
        } else {
          setError(result)
        }
      }
    )
  })

  if (error) {
    return <h1>{error}</h1>
  }
  return directions && <DirectionsRenderer directions={directions} />
}
