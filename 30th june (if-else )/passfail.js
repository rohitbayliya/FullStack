var prompt = require('prompt-sync')();

let marks = parseInt(prompt('Enter marks:'))

if(marks >= 33) {
    console.log('pass');
} else {
    console.log('fail');
}
