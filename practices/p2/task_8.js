let human = Object.create({}, {
    fullName: {
        set: function (value) {
            [this.firstName, this.lastname] = value.split(' ')
        },
        get: function (){
            return `${this.firstName} ${this.lastname}`
        }
    },
    dateOfBirth: {
        set: function (value){
            return this.age = (new Date).getFullYear() - (new Date(value)).getFullYear()
        }
    }
})

console.log(human.fullName)
human.fullName = 'Adam Smith'
console.log(human.fullName)
human.dateOfBirth = '09/11/1923'
console.log(human.age)
