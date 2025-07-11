let a = [1, 2, 3]
let b = [6, 7, 8]

let c = [...a, 4, 5, ...b, 9]
console.log(c);

function fun(x, ...args) {
    console.log(x);
    console.log(args);
    console.log(arguments);
}
fun(...c)