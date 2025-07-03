var prompt = require('prompt-sync')();

let num1 = parseInt(prompt('Enter a num1:'))
let num2 = parseInt(prompt('Enter a num2:'))

if(num1 > num2) {
    console.log("num1");
} else if (num1 < num2) {
    console.log('num2');
} else {
    console.log('equal')    
}