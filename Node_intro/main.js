const {myFunction} = require("./app")

myFunction

const {myArray} = require("./app")

myArray

const _ = require('lodash');

console.log(_.reverse(myArray))
let newArray = _.pull(myArray, 1, 5);

console.log(newArray)