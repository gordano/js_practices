function averageSalary(employers) {
    let totalSalary = employers.reduce(function (acc, item) {
        return acc + Number(item.salary)
    }, 0)

    let employersCount = employers.length
    return totalSalary / employersCount
}

function sortBySalary(employers) {
    return employers.sort(function (a, b) {
        return a.salary - b.salary
    })
}

function filterBySalaryAndAge(employers) {
    return employers.filter(function (item) {
        return Number(item.salary) > 4500 &&
            Number(item.age) > 35;
    })
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
