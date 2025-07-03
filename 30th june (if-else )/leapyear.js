var prompt = require('prompt-sync')();

let year = parseInt(prompt('Enter year:'))

if (year % 400 == 0) {
    console.log('leap year');
    return
}else if (year % 100 == 0) {
    console.log('not leap year');
} else {
    if (year % 4 == 0) {
        console.log('leap year');
    } else {
        console.log('not leap year');
    }
}