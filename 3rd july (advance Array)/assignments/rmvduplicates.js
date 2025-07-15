// Given an array of numbers, how do you remove all duplicate values without using Set?

function rmvDuplicates(arr) {
    let unq = []
    for (let index = 0; index < arr.length; index++) {
        if(unq.includes(arr[index])){
            continue
        } else {
            unq.push(arr[index])
        }
    }
    return unq
}
let arr = [1, 2, 3, 2, 3, 4, 5, 4, 5, 3 ,6, 6, 7 , 7]
console.log(rmvDuplicates(arr));