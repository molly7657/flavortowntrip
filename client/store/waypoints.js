// /**
//  * ACTION TYPES
//  */
// const ADD_WAYPOINT = 'ADD_WAYPOINT'
// const REMOVE_WAYPOINTS = 'REMOVE_WAYPOINTS'

// /**
//  * INITIAL STATE
//  */
// const waypointsList = []

// /**
//  * ACTION CREATORS
//  */
// const addWaypoint = waypoint => ({type: ADD_WAYPOINT, waypoint})
// const removedWaypoints = () => ({type: REMOVE_WAYPOINTS})
// /**
//  *
//  * THUNK CREATORS
//  */
// export const addWaypointThunk = restaurant => dispatch => {
//   try {
//     const coords = {
//       location: {lat: restaurant.longitude, lng: restaurant.latitude},
//       stopover: true
//     }
//     dispatch(addWaypoint(coords))
//   } catch (err) {
//     console.error(err)
//   }
// }
// export const removeWaypointsThunk = () => dispatch => {
//   try {
//     dispatch(removedWaypoints())
//   } catch (error) {
//     console.error(error)
//   }
// }
// /**
//  * REDUCER
//  */
// export const waypointReducer = (waypoints = waypointsList, action) => {
//   switch (action.type) {
//     case ADD_WAYPOINT:
//       return [...waypointsList, action.waypoint]
//     case REMOVE_WAYPOINTS:
//       return []
//     default:
//       return waypoints
//   }
// }
