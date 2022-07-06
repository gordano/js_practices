const Calc = function (){

    this.actions = {
        '+': (a, b) => a + b ,
        '-': (a, b) => a - b
    }
    this.logs = []

    this.addOperation = function(operation, formula) {
        this.actions[operation] = formula
    }

    this.operation = function(params) {
        return console.log(this.runFormula(params))
    }

    this.history = function(){
        return console.log(this.logs)
    }

    this.clearHistory = () => { this.logs = [] }

    this.runFormula = function(params) {
        let [operand1, operation, operand2] = params.split(' ');
        let featureOperation = this.actions[operation]

        this.addHistory(operand1, operation, operand2)

        if (featureOperation){
            return featureOperation(Number(operand1),Number(operand2))
        } else {
            return undefined
        }
    }

    this.addHistory = function(operand1, operation, operand2){
        this.logs.push({
            'operation': operation,
            'operands': [operand1, operand2]
        })
    }
}


const calculator = new Calc()
calculator.operation('31 + 32')
calculator.addOperation('/', (a, b) => a / b)
calculator.operation('1 / 2')
calculator.addOperation('-', (a, b) => a - b)
calculator.operation('1 - 2')
calculator.history()
calculator.clearHistory()
calculator.history()
