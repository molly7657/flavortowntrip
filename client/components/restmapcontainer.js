import React from 'react'
import RestaurantMap from './restaurantmap'
import {connect} from 'react-redux'
import {getRestaurantsThunk} from '../store/restaurants'

class RestaurantMapContainer extends React.Component {
  componentDidMount() {
    this.props.getRestaurants()
  }

  render() {
    return (
      <div style={{width: '100vw', height: '100vh'}}>
        <RestaurantMap
          restaurants={this.props.restaurants}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDBnjHX_aYzwenEeMjFN2YLpkGHnnYc1Gs "
          loadingElement={<div style={{height: '100%'}} />}
          containerElement={<div style={{height: '100%'}} />}
          mapElement={<div style={{height: '100%'}} />}
        />
        <div className="flipflop">
          <img
            src="https://i.imgur.com/BTovY2S.png"
            style={{
              width: 150,
              height: 150,
              textAlign: 'right',
              padding: 20
            }}
          />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(
  RestaurantMapContainer
)
