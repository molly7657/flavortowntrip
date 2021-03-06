import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {userReducer} from './user'
import {restaurantsReducer} from './restaurants'
import {coordsReducer} from './coords'
import {waypointReducer} from './waypoints'

const reducer = combineReducers({
  user: userReducer,
  restaurants: restaurantsReducer,
  coords: coordsReducer,
  waypoints: waypointReducer
})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
