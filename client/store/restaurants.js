import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const GET_RESTAURANTS = 'GET_RESTAURANTS'
const GET_RESTAURANT = 'GET_RESTAURANT'

/**
 * INITIAL STATE
 */
const restaurantList = []

/**
 * ACTION CREATORS
 */
const getRestaurants = restaurants => ({type: GET_RESTAURANTS, restaurants})
const getRestaurant = restaurant => ({type: GET_RESTAURANT, restaurant})
/**
 *
 * THUNK CREATORS
 */
export const getRestaurantsThunk = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/restaurants/')
    dispatch(getRestaurants(data))
  } catch (err) {
    console.error(err)
  }
}
export const getRestaurantThunk = id => async dispatch => {
  try {
    const {data} = await axios.get(`/api/restaurants/${id}`)
    dispatch(getRestaurant(data))
  } catch (error) {
    console.error(error)
  }
}
/**
 * REDUCER
 */
export const restaurantsReducer = (restaurants = restaurantList, action) => {
  switch (action.type) {
    case GET_RESTAURANTS:
      return action.restaurants
    case GET_RESTAURANT:
      return action.restaurant
    default:
      return restaurants
  }
}
