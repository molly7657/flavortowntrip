const Sequelize = require('sequelize')
const db = require('../db')

const Restaurant = db.define('restaurant', {
  season: {
    type: Sequelize.STRING,
    allowNull: false
  },
  showtitle: {
    type: Sequelize.STRING,
    allowNull: false
  },
  restaurant: {
    type: Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  businessid: {
    type: Sequelize.STRING,
    allowNull: false
  },
  rating: {
    type: Sequelize.STRING,
    allowNull: false
  },
  reviews: {
    type: Sequelize.STRING,
    allowNull: false
  },
  latitude: {
    type: Sequelize.STRING,
    allowNull: false
  },
  longitude: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING,
    defaultValue: '101 Main Street'
  },
  zipcode: {
    type: Sequelize.STRING,
    defaultValue: '12345'
  }
})

module.exports = Restaurant
