import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from 'react-google-maps'
import {getRestaurantsThunk} from '../store/restaurants'

function Map() {
  // const [selectedrestaurant, setrestaurant] = useState(null)
  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{lat: 40.70454, lng: -74.009468}}
    >
      {/* {this.props.restaurants.map(restaurant => (
        <Marker
          key={restaurant.id}
          position={{
            lat: parseInt(restaurant.latitude),
            lng: parseInt(restaurant.longitude)
          }}
        />
      ))} */}
    </GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

class CoolMap extends React.Component {
  componentDidMount() {
    this.props.getRestaurants()
  }

  render() {
    return (
      <div style={{width: '100vw', height: '100vh'}}>
        <WrappedMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDBnjHX_aYzwenEeMjFN2YLpkGHnnYc1Gs "
          loadingElement={<div style={{height: '100%'}} />}
          containerElement={<div style={{height: '100%'}} />}
          mapElement={<div style={{height: '100%'}} />}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRestaurants: () => dispatch(getRestaurantsThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoolMap)
