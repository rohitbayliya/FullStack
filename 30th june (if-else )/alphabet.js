var prompt = require('prompt-sync')();

let alphabet = prompt('Enter an alphabet:')

if(alphabet.length==1){
    let charCode = alphabet.charCodeAt(0)

    if (charCode>=65 && charCode<=90) {
        console.log('uppercase');
    } else if (charCode>=97 && charCode<=122){
        console.log('lowercase');
    } else {
        console.log('wrong input');
    }
} else {
    console.log('enter only one character!!');
}