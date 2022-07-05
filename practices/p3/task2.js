const cache = function() {
    let result = {
        a: null,
        b: null,
        value: 0,
        fromCache: false,
        action: function() { return this.a**this.b },
        output: function() { return { value: this.value, fromCache: this.fromCache} }
    }

    return function (a, b) {
        if (result.a === a && result.b === b){
            result.fromCache = true

            return console.log(result.output())
        }else{
            [result.a, result.b] = [a,b]
            result.value = result.action()
            result.fromCache = false

            return console.log(result.output())
        }
    }
}


const calculate = cache();
calculate(3,3); // { value: 27, fromCache: false }
calculate(3,3); // { value: 27, fromCache: true }
calculate(1,3); // { value: 1, fromCache: false }
