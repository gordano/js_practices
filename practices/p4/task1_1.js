// Task 1.1
const array = [1, 2, 3, 4, 5]

Object.getPrototypeOf(array).shuffle = function () {
    return this.map(function (item) {
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

console.log(array.shuffle())


