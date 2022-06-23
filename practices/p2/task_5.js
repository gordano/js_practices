function averageSalary(employers){
    let totalSalary = employers.reduce(callbackAverageSalary,0)
    let employersCount = employers.length
    return totalSalary / employersCount
}
const callbackAverageSalary = function (acc, item){
    return acc + Number(item.salary)
}

function sortBySalary(employers){
    return employers.sort(callbackSortBySalary)
}

const callbackSortBySalary = function (a,b){
    return a.salary - b.salary
}

function filterBySalaryAndAge(employers){
    return employers.filter(callbackfilterBySalaryAndAge)
}

const callbackfilterBySalaryAndAge = function (item){
    return Number(item.salary) > 4500 &&
        Number(item.age) > 35;
}

const employees = [
    {
        firstName: 'Alex',
        lastName: 'Smith',
        age: 54,
        salary: 10000,
        position: 'Architect'
    },
    {
        firstName: 'Gustav',
        lastName: 'Andersen',
        age: 31,
        salary: 5000,
        position: 'Software engineer'
    },
    {
        firstName: 'Liz',
        lastName: 'Taylor',
        age: 20,
        salary: 7000,
        position: 'Manager'
    }
]

console.log(averageSalary(employees));  //7333.333333333333
console.log(sortBySalary(employees));
console.log(filterBySalaryAndAge(employees));