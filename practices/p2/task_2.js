function compareArrays(object1, object2){
    return typeShouldBe('object', object1) && typeShouldBe('object', object2)
        ? call(object1, object2) : null
}

function typeShouldBe(type, object){
    switch(typeof(object)){
        case type:
            return true;
        default:
            return false;
    }
}

function call(array1, array2){
    let arraysSorted = [array1, array2].sort(function(a,b){return b.length-a.length})
    return compare(arraysSorted[0], arraysSorted[1])
}

function compare(array_big, array_small){
    return array_big.map(function(item, index){
        return item === array_small[index];
    });
}

let array1 = [5,4,3,2,1]
let array2 = [1,2,3,4,5,6]
console.log(compareArrays(array1,array2))
// [ false, false, true, false, false, false ]