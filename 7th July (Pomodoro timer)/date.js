var prompt = require('prompt-sync')();

function groupByType(arr) {
    let start = Date.now()
    let num = []
    let str = []
    let bool = []
    for (let item of arr) {
        let type = typeof item;
        if (type === "number") {
            num.push(item)
        } else if(type === "string"){
            str.push(item)
        } else if (type === "boolean") {
            bool.push(item)
        }
    }
    console.log("{ number: ", num , ", string: ", str, ", boolean: ", bool ," }");
    let end = Date.now()
    console.log(end-start+ " Milliseconds");
}

let a = [1, 'a', true, 2, 'b']
groupByType(a)


let year = parseInt(prompt('Enter year: '))
let month = parseInt(prompt('Enter month: '))
let date = parseInt(prompt('Enter date: '))
let dob = new Date(200, month-1, date)
console.log(dob);
console.log(dob.getDate());