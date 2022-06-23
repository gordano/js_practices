
function filterByLength(object, filterParams){
    let result =  filterParams.map(function(param){
        return object.filter(function(item){
            return item.length === param
        })
    })
    return Array.prototype.concat.apply([], result);
}

const fruits = ['orange', 'apple', 'banana', '']
console.log(filterByLength(fruits, [0,5]))
//[ '', 'apple' ]
