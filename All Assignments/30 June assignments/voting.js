var prompt = require('prompt-sync')();

let age = parseInt(prompt('Enter age:'))

if(age < 0) {
    console.log("invalid age");
} else if (age >= 18) {
    console.log('can vote');
} else {
    console.log('cannot vote')    
}