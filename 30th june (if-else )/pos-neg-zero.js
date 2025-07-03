var prompt = require('prompt-sync')();

let num = parseInt(prompt('Enter a num to check positive, negative or zero:'))

if(num > 0) {
    console.log("positive number");
} else if (num < 0) {
    console.log('negative number');
} else {
    console.log('zero')    
}