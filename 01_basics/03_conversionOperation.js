/*
  
  > Date Created: May 16, 2025
  > Author: Ishaan Rastogi
  > Purpose: Conversion Operation in JavaScript
  > Operating System: This is only for Windows OS, it may or may not work on other OS
  > Program Status: 100% Working

*/

// Many a times when receiving data from an input, many a times we don't know what type of data we are receiving.
// So we need to convert the data to the required type.

let score = "33"

// 2 ways
console.log(typeof score) // string
console.log(typeof(score)) // string

// to convert to number
let scoreNumber = Number(score) // converts to number
console.log(typeof scoreNumber) // number

console.log("")

// NaN means Not a Number
// NaN is a number but not a valid number

let scoreString = "33abc" // string
let scoreNumber2 = Number(scoreString)
console.log(typeof scoreNumber2) // number - 33abc got converted to NaN ( a number but not a valid number)
console.log(scoreNumber2) // NaN

console.log("")

let scoreNull = null
let scoreNumber3 = Number(scoreNull)
console.log(typeof scoreNumber3) // number
console.log(scoreNumber3) // 0

console.log("")

let scoreUndefined = undefined
let scoreNumber4 = Number(scoreUndefined)
console.log(typeof scoreNumber4) // number
console.log(scoreNumber4) // NaN

// to convert a boolean

let scoreBoolean = true
let scoreNumber5 = Number(scoreBoolean) // converts to number
console.log(typeof scoreNumber5) // number
console.log(scoreNumber5) // 1

console.log("")

// to convert a string
let scoreString2 = "true"
let scoreNumber6 = Number(scoreString2) // converts to number
console.log(typeof scoreNumber6) // number
console.log(scoreNumber6) // NaN

console.log("")

let isLoggedIn = 1
let booleanValue = Boolean(isLoggedIn) // converts to boolean
console.log(typeof booleanValue) // boolean
console.log(booleanValue) // true

console.log("")

let isLoggedIn2 = ""
let booleanValue2 = Boolean(isLoggedIn2) // converts to boolean
console.log(typeof booleanValue2) // boolean
console.log(booleanValue2) // false

let isLoggedIn3 = " Ishaan "
let booleanValue3 = Boolean(isLoggedIn3) // converts to boolean
console.log(typeof booleanValue3) // boolean
console.log(booleanValue3) // true