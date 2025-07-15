let arr = [3, 5, 2, 10, 5, 7 ,8]

let mul = arr.reduce((pre, val)=>{
    return pre * val
}, 1)
console.log(mul);

let avr = arr.reduce((pre, val)=>{
    return pre + val
}, 0)/arr.length

console.log(avr);