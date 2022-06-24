function compareArrays(array1, array2){
    if (!Array.isArray(array1) || !Array.isArray(array2)) return false;

    let arraysSorted = [array1, array2].sort(function(a,b){return b.length-a.length})
    return compare(arraysSorted[0], arraysSorted[1])
}

function compare(arrayBig, arraySmall){
    return arrayBig.map(function(item, index){
        return item === arraySmall[index];
    });
}

let array1 = [5,4,3,2,1]
let array2 = [1,2,3,4,5,6]
console.log(compareArrays(array1,array2))
// [ false, false, true, false, false, false ]