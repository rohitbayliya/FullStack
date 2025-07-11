// How would you chunk an array into groups of N elements?
// Example: [1,2,3,4,5,6], N = 2 → [[1,2], [3,4], [5,6]]

function groups(array, n) {
    let res = []
    for (let index = 0; index < array.length; index++) {
        let temp = []
        for (let j = 0; j < n; j++) {
            temp.push(array[index])
            index++
        }
        index--
        res.push(temp)
    }
    return res
}

console.log(groups([1,2,3,4,5,6], 2));