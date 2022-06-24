function shuffleArray(array) {
    return array.map(function (item) {
        return {
            value: item,
            score: Math.random()
        }
    }).sort(function (a, b) {
            return a.score - b.score
        }
    ).map(function (item) {
        return item.value
    })
}

let array = [1, 2, 3, 4, 5, 6]
console.log(shuffleArray(array))
