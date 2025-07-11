let arr = [1, 2, 3, 5, 11, 3, 45]
let sum = 0
arr.forEach((value, index, array)=> {
    sum+=value
})
console.log(sum);