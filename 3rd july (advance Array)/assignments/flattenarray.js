// How would you flatten a deeply nested array (e.g., [1, [2, [3, [4]], 5]]) to a single array
//  using recursion or a built-in method?
function flatten(ary) {
    var flt = [];
    for(var i = 0; i < ary.length; i++) {
        if(Array.isArray(ary[i])) {
            flt = flt.concat(flatten(ary[i]));
        } else {
            flt.push(ary[i]);
        }
    }
    return flt;
}

console.log(flatten([1, [2, [3, [4]], 5]]));