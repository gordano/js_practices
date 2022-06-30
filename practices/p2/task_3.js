
function filterByLength(words, searchParam1, searchParam2){
    return searchWord(words, searchParam1).concat(searchWord(words, searchParam2));
}

const searchWord = function(words, searchParams){
    return words.filter(function(item){
        return item.length === searchParams
    });
}

const fruits = ['orange', 'apple', 'banana', '']
console.log(filterByLength(fruits, 0,5))
//[ '', 'apple' ]
