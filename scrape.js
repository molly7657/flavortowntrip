const csvfile = require('./jquery.csv.js')

const data = $.csv.toObjects('./locations.csv')

console.log(data)

const fs = require('fs')
const jquery = require('jquery-csv')

// const data = './data/sample.csv';

// fs.readFile(sample, 'UTF-8', function (err, csv) {
//   if (err) { console.log(err); }
//   csv.toArrays(csv, {}, function (err, data) {
//     if (err) { console.log(err); }
//     for (var i = 0, len = data.length; i < len; i++) {
//       console.log(data[i]);
//     }
//   });
// });

//for tomorrow - require jquery and play around with how to run. you are close - you got this@
