import React from 'react'
import RestaurantMap from './restaurantmap'
import {connect} from 'react-redux'
import {getRestaurantsThunk} from '../store/restaurants'
import axios from 'axios'
// import {getDirectionsThunk} from '../store/directions'

class RestaurantMapContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      origin: '',
      destination: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount() {
    this.props.getRestaurants()
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  async handleSubmit(event) {
    event.preventDefault()
    await this.setState({
      origin: event.target.origin.value,
      destination: event.target.destination.value
    })
    const origin = this.state.origin
    const origincoords = await axios.get(
      'https://maps.googleapis.com/maps/api/geocode/json',
      {
        params: {
          address: origin,
          key: 'AIzaSyDBnjHX_aYzwenEeMjFN2YLpkGHnnYc1Gs'
        }
      }
    )
    const destination = this.state.destination
    const destinationcoords = await axios.get(
      'https://maps.googleapis.com/maps/api/geocode/json',
      {
        params: {
          address: destination,
          key: 'AIzaSyDBnjHX_aYzwenEeMjFN2YLpkGHnnYc1Gs'
        }
      }
    )
    await this.setState({
      origin: origincoords.data.results[0].geometry.location,
      destination: destinationcoords.data.results[0].geometry.location
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div>
          <div className="directions" align="center">
            <h4 align="center"> PLAN YOUR TRIP TO FLAVORTOWN </h4>
            <form onSubmit={this.handleSubmit} align="left">
              <label htmlFor="origin">Starting Location:</label>
              <input
                type="text"
                name="origin"
                value={this.state.origin}
                onChange={this.handleChange}
              />
              <label htmlFor="destination">Ending Location:</label>
              <input
                type="text"
                name="destination"
                value={this.state.destination}
                onChange={this.handleChange}
              />
              <button type="submit" className="button">
                Put it on a flip flop
              </button>
            </form>
          </div>
        </div>
        <div>
          <div className="flipflop">
            <img
              src="https://i.imgur.com/BTovY2S.png"
              style={{
                width: 150,
                height: 150,
                textAlign: 'right',
                padding: 30
              }}
            />
          </div>
          <div style={{width: '100vw', height: '100vh'}}>
            <RestaurantMap
              restaurants={this.props.restaurants}
              origin={this.state.origin}
              destination={this.state.destination}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDBnjHX_aYzwenEeMjFN2YLpkGHnnYc1Gs "
              loadingElement={<div style={{height: '100%'}} />}
              containerElement={<div style={{height: '100%'}} />}
              mapElement={<div style={{height: '100%'}} />}
            />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants
    // origin: state.origin,
    // destination: state.destination
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRestaurants: () => dispatch(getRestaurantsThunk())
    // getDirections: directions => dispatch(getDirectionshunk(origin)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  RestaurantMapContainer
)
