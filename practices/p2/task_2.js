function compareArrays(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) return false;

    let arraysSorted = [array1, array2].sort(function (a, b) {
        return b.length - a.length
    });
    let result = [];
    for (let i = 0; i < arraysSorted[0].length; i++) {
        let isEqual = arraysSorted[0][i] === arraysSorted[1][i];
        result.push(isEqual)
    }
    return result;
}
let array1 = [5, 4, 3, 2, 1]
let array2 = [1, 2, 3, 4, 5, 6]
console.log(compareArrays(array1, array2))
// [ false, false, true, false, false, false ]