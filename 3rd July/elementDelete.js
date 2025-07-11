var prompt = require('prompt-sync')();

let arr = [1, 2, 3, 4, 5, 6, 7]

console.log("Array: ", arr);
let ele = parseInt(prompt('Enter element to delete: '))

arr.splice(arr.indexOf(ele), 1)

console.log(arr);