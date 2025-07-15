// How do you find all pairs of elements in an array whose sum equals a target number?
// Example: [1, 2, 3, 4, 5], target = 6 → [[1,5], [2,4]]

function target(array, target) {
    let targetArr = []
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            if(array[i]+array[j]==target) {
                targetArr.push([array[i], array[j]])
            }
        }
    }
    return targetArr
}

console.log(target([1, 2, 3, 4, 5], 6));