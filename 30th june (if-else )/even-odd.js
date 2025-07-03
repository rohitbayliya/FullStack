var prompt = require('prompt-sync')();

let num = parseInt(prompt('Enter a number to check even or odd: '))

if(num%2 === 0) {
    console.log("Number is even.");
} else {
    console.log('Number id odd.');
    
}