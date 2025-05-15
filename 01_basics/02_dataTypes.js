"use strict"; // This is a strict mode, it will throw an error if you try to use a variable that is not declared
// This treats the code as a newer version.

// alert(3+3) // we are using NodeJS not browser, so we cannot use alert like this

console.log(3+3); console.log("Hello World") // We are using ; to separate the statements if you are writing in one line.

let name = "Ishaan" // string
let age = 20 // integer
let isLoggedIn = false // boolean

// integer's range is from -2^53 to 2^53
// BigInt is used to store large integers

// null is standalone value and a data type also but not an object // We are intentionally assigning a variable to null
let user = null // null
// undefined when value is not assigned to a variable
let state

// symbol is used to create unique identifiers

console.log(typeof "Ishaan") // string
console.log(typeof age) // number

console.log(typeof null) // object

// LOL! null is not an object but typeof null returns object

console.log(typeof undefined) // undefined