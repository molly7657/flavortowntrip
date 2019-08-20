import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_COORDS = 'GET_COORDS'

/**
 * INITIAL STATE
 */
const coords = {
  origin: {lat: 40.70454, lng: -74.009468},
  destination: {lat: 34.052235, lng: -118.243683}
}

/**
 * ACTION CREATORS
 */
const gotCoords = coords => ({type: GET_COORDS, coords})

/**
 *
 * THUNK CREATORS
 */
export const getCoordsThunk = (origin, destination) => async dispatch => {
  try {
    const origincoords = await axios.get(
      'https://maps.googleapis.com/maps/api/geocode/json',
      {
        params: {
          address: origin,
          key: 'AIzaSyDBnjHX_aYzwenEeMjFN2YLpkGHnnYc1Gs'
        }
      }
    )
    console.log(origincoords)
    const destinationcoords = await axios.get(
      'https://maps.googleapis.com/maps/api/geocode/json',
      {
        params: {
          address: destination,
          key: 'AIzaSyDBnjHX_aYzwenEeMjFN2YLpkGHnnYc1Gs'
        }
      }
    )
    console.log(destinationcoords)
    const coords = {
      origin: origincoords.data.results[0].geometry.location,
      destination: destinationcoords.data.results[0].geometry.location
    }
    dispatch(gotCoords(coords))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export const coordsReducer = (coordinates = coords, action) => {
  switch (action.type) {
    case GET_COORDS:
      return action.coords
    default:
      return coordinates
  }
}
