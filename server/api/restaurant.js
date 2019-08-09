const router = require('express').Router()
const {Restaurant} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const restaurants = await Restaurant.findAll()
    res.json(restaurants)
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findByPk(req.params.id)
    res.json(restaurant)
  } catch (error) {
    next(error)
  }
})
