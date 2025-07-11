// How do you count the number of occurrences of each element in an array?
// Example: [1, 2, 2, 3, 1, 1] → {1: 3, 2: 2, 3: 1}

function occurrences(array) {
    let occ = {}
    for (let index = 0; index < array.length; index++) {
        if(occ[array[index]]){
            occ[array[index]] += 1
        } else {
            occ[array[index]] = 1
        }
    }
    return occ
}

let array = [1, 2, 2, 3, 1, 1]
console.log(occurrences(array));