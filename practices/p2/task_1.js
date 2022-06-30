
function getWordsInfo(object){
    return typeShouldBe('string', object) ? call(object) : null
}

function typeShouldBe(type, object){
    switch(typeof(object)){
        case type:
            return true;
        default:
            return false;
    }
}
function call(text){
    let words = text.trim().split(' ')

    return words.map(buildWordObject)
}

function buildWordObject(word){
    return Object.create({}, {
        word:{
            value: word,
            enumerable: true
        },
        length:{
            value: word.length,
            enumerable:true
        },
        isCapitalized:{
            value: word[0] === word[0].toUpperCase(),
            enumerable: true
        }
    })
}


const text = "Luke I am Your Father";
console.log(getWordsInfo(text));

// [ { word: 'Luke', length: 4, isCapitalized: true },
//     { word: 'I', length: 1, isCapitalized: true },
//     { word: 'am', length: 2, isCapitalized: false },
//     { word: 'Your', length: 4, isCapitalized: true },
//     { word: 'Father', length: 6, isCapitalized: true } ]
