var prompt = require('prompt-sync')();

let num1 = parseInt(prompt('Enter a num1:'))
let num2 = parseInt(prompt('Enter a num2:'))
let num3 = parseInt(prompt('Enter a num3:'))

if (num1 > num2 && num1 > num3) {
    if (num1%num2 == 0 && num1%num3 == 0) {
        console.log('num1 is divisible by num2 & num3');
    } else if (num1%num2 == 0 && num1%num3!=0) {
        console.log('num1 is divisible by num2 only');
    } else if (num1%num2 != 0 && num1%num3==0) {
        console.log('num1 is divisible by num3 only');
    } else {
        console.log('num1 is not divisible by any num provided');
    }
}