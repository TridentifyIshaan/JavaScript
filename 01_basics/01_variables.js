/*
  
  This note will be available only on first file of each folder present in folder JavaScript .
  Documentation aka basic notes on how to run the code is already kept in each file for each programme using (/) or //.
  Wherever author needs it to be inserted, he has inserted. So that people using these files can learn easily how to code in JavaScript Language. Author has made these programmes as a reference using courses of Chai aur Code, while himself learning JavaScript Language for the first time.
  
  > Date Created: May 15, 2025
  > Author: Ishaan Rastogi
  > Purpose: Variables in JavaScript
  > Operating System: This is only for Windows OS, it may or may not work on other OS
  > Program Status: 100% Working

*/

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

/*
  
  For Terminal Code... Ctrl + Shift + `
  NOTE- Install Code Runner extension to run the code
  
  To Run code- Ctrl + Alt + N

  Or use the following commands in the terminal:
    > node filename.js
  
*/