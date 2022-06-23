function shuffleArray(array){
    return array.map(callbackMap).sort(callbackSort).map(callbackDecorate)
}

const callbackMap = function (item){
    return {
        value: item,
        score: Math.random()
    }
}
const callbackSort = function (a,b){
    return a.score - b.score
}

const callbackDecorate = function (item){
    return item.value
}

let array = [1,2,3,4,5,6]
console.log(shuffleArray(array))
