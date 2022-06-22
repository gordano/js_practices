function wordReverse(word){
    return validateWord(word) ? buildWord(word) : null
}
function validateWord(word){
    switch(typeof(word)){
        case "string":
            return true;
        default:
            return false;
    }
}

function buildWord(word){
    let result = '';
    for(let i = word.length - 1; i >=0 ; i--){
        result += word[i];
    }
    return result;
}

// TESTS
console.log(wordReverse('TEST'))
console.log(wordReverse(' TEST '))
console.log(wordReverse(NaN))
console.log(wordReverse(3333))