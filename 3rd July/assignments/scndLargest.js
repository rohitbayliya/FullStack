// How would you find the second largest number in an array like [10, 5, 8, 1, 9] without sorting?
function scndLargest(array) {
    let largest = 0
    let scndLargest = 0
    for (let index = 0; index < array.length; index++) {
        if (largest <= array[index]) {
            scndLargest = largest
            largest = array[index]
        } else {
            continue
        }
    }
    return scndLargest
}

console.log(scndLargest([1, 2, 3, 4, 5, 6, 7]));