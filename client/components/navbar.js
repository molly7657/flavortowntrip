import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'
import AppBar from '@material-ui/core/AppBar'
import {flexbox} from '@material-ui/system'

const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <AppBar
      style={{background: 'transparent', boxShadow: 'none'}}
      display="flex"
    >
      <Link to="/map" style={{padding: 40, margin: 40, color: 'black'}}>
        Put It On A Flip Flop!
      </Link>
      <img
        src="https://i.imgur.com/BTovY2S.png"
        style={{width: 150, height: 150, textAlign: 'right', padding: 20}}
      />
    </AppBar>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
