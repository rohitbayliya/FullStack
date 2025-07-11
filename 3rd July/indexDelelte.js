var prompt = require('prompt-sync')();

let arr = [1, 2, 3, 4, 5, 6, 7]

console.log("Array: ", arr);
let index = parseInt(prompt('Enter index to delete: '))

arr.splice(index, 1)

console.log(arr);