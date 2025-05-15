const accountId = 144553; // This is a constant variable, it cannot be changed
let accountEmail = "ishaan@google.com" // This is a mutable variable, it can be changed
var accountPassword = "12345" // This is a mutable variable, it can be changed but it is block scoped meaning it will not be available outside the block, that's why we don't use it much.
accountCity = "Delhi" // This is a mutable variable, it can be changed
let accountState // This is a mutable variable, it can be changed but it is not initialized, so it will be undefined.

// This takes more lines to change 

// accountId = 2 // This will throw an error because accountId is a constant
console.log(accountId)

accountEmail = "ishaan@microsoft.com"
accountPassword = "67890"
accountCity = "Noida"

console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)
console.log(accountState) // undefined

// This takes 2 lines to change 

console.log(accountId)
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])