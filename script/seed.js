const Papa = require('papaparse')
const fs = require('fs')
const file = fs.createReadStream('locations.csv')
const db = require('../server/db')
const {Restaurant, User} = require('../server/db/models')

async function cbforparsing(data) {
  let dataobj = data
  console.log(Array.isArray(data))
}

function parseData(url, callback) {
  Papa.parse(url, {
    header: true,
    complete: function(results) {
      callback(results.data)
    }
  })
}

parseData(file, cbforparsing)

const users = [
  {email: 'cody@email.com', password: '123', isAdmin: true},
  {email: 'murphy@email.com', password: '123', isAdmin: false}
]

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all(
    Restaurant.create({
      season: '22',
      showtitle: 'Food TruckAPalooza',
      restaurant: 'The Grilled Cheeserie',
      city: 'Nashville',
      state: 'Tennessee',
      businessid: 'The-Grilled-Cheeserie-Nashville',
      rating: '4',
      reviews: '107',
      latitude: '-86.7839126587',
      longitude: '36.1675605774)'
    })
  )

  await Promise.all(users.map(user => User.create(user)))
  console.log(`seeded ${users.length} users`)

  console.log(`seeded successfully`)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
