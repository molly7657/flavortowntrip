import React from 'react'
import RestaurantMap from './restaurantmap'
import {connect} from 'react-redux'
import {getRestaurantsThunk} from '../store/restaurants'
import {getCoordsThunk} from '../store/coords'
import {removeWaypointsThunk} from '../store/waypoints'
import key from '../../secrets'

class RestaurantMapContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      origin: 'Brooklyn, NY',
      destination: 'Los Angeles, CA'
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
    await this.props.getCoords(
      event.target.origin.value,
      event.target.destination.value
    )
    await this.props.removeWaypoints()
    // this.forceUpdate()
  }

  render() {
    return (
      <div>
        <div>
          <div className="directions" align="center">
            <div className="title">
              <h3 align="center">{'    '}PLAN YOUR TRIP TO</h3>
              <h2 className="font-effect-fire-animation">{'   '}FLAVORTOWN </h2>
            </div>
            <div className="form">
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
                  That's GANGSTA!
                </button>
              </form>
            </div>
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
              waypoints={this.props.waypoints}
              origin={this.props.coords.origin}
              destination={this.props.coords.destination}
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places&key=${key}`}
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
    restaurants: state.restaurants,
    coords: state.coords,
    waypoints: state.waypoints
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRestaurants: () => dispatch(getRestaurantsThunk()),
    getCoords: (origin, destination) =>
      dispatch(getCoordsThunk(origin, destination)),
    removeWaypoints: () => dispatch(removeWaypointsThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  RestaurantMapContainer
)
