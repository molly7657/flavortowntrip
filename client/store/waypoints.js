/**
 * ACTION TYPES
 */
const ADD_WAYPOINT = 'ADD_WAYPOINT'
const REMOVED_WAYPOINTS = 'REMOVED_WAYPOINTS'

/**
 * INITIAL STATE
 */
const waypointsList = []

/**
 * ACTION CREATORS
 */
const addWaypoint = waypoint => ({type: ADD_WAYPOINT, waypoint})
const removedWaypoints = () => ({type: REMOVED_WAYPOINTS})
/**
 *
 * THUNK CREATORS
 */
export const addWaypointThunk = restaurant => dispatch => {
  try {
    console.log('in the thunk')
    const coords = {
      location: {
        lat: parseFloat(restaurant.longitude),
        lng: parseFloat(restaurant.latitude)
      },
      stopover: true
    }
    dispatch(addWaypoint(coords))
  } catch (err) {
    console.error(err)
  }
}
export const removeWaypointsThunk = () => dispatch => {
  try {
    console.log('in the remove thunk')
    dispatch(removedWaypoints())
  } catch (error) {
    console.error(error)
  }
}
/**
 * REDUCER
 */
export const waypointReducer = (waypoints = waypointsList, action) => {
  switch (action.type) {
    case ADD_WAYPOINT:
      waypoints.push(action.waypoint)
      return waypoints
    case REMOVED_WAYPOINTS:
      return []
    default:
      return waypoints
  }
}
