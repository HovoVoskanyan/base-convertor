let convertor = require("./convertor.js")
let reader = require("readline-sync");

num = reader.questionInt("Please Insert number = ")

console.log(convertor.convertToHex(num));