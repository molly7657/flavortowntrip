const Papa = require('papaparse')
const fs = require('fs')
const file = fs.createReadStream('./locations.csv')

async function getData(newfile) {
  await Papa.parse(newfile, {
    header: true,
    complete: function(results) {
      return results.data
    }
  })
}

const data = getData(file)

module.exports = data
