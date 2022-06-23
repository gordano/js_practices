function wordLength(word){
    switch(typeof(word)){
        case "string":
            return word.trim().length;
        default:
            return null
    }
}
// TESTS
console.log(wordLength('TEST'))
console.log(wordLength(' TEST '))
console.log(wordLength(NaN))
console.log(wordLength(3333))