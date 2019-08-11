import {DirectionsRenderer} from 'react-google-maps'
import React, {useState, useEffect} from 'react'

export function MapDirectionsRenderer(props) {
  const [directions, setDirections] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const {restaurants, travelMode} = props
    const origin = props.origin
    const destination = props.destination
    const waypoints = restaurants
      .filter(p => {
        return (
          origin.lat - 0.22 <= parseFloat(p.latitude) <= origin.lat + 0.22 ||
          destination.lat - 0.22 <=
            parseFloat(p.latitude) <=
            destination.lat + 0.22
        )
      })
      .map(p => ({
        location: {lat: parseFloat(p.latitude), lng: parseFloat(p.longitude)},
        stopover: true
      }))

    const directionsService = new window.google.maps.DirectionsService()
    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: 'DRIVING'
        // waypoints: waypoints.slice(0, 6)
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
