const Human = function (human) {
    this.name = human.name
    this.lastName = human.lastName
    this.eat = human.eat
    this.sleep = human.sleep
    this.location = human.location
    this.callFriend = human.callFriend
}

const Employer = function (human) {
    this.position = human.position
    this.startDate = human.startDate
    this.baseSalary = human.baseSalary
    this.salaryCurrency = human.salaryCurrency
    this.department = human.department
    this.phoneNumber = human.phoneNumber
    this.writeReport = human.writeReport
    this.organizeMeeting = human.organizeMeeting
    this.startVacation = human.startVacation
}

const EmployerFormer = function (human) {
    this.endDate = human.endDate
    this.retire = human.retire
}

const john = {
    name: "John",
    lastName: "Smith",
    position: "Senior engineer",
    startDate: "10.10.1990",
    endDate: "10.10.2000",
    baseSalary: "10000",
    salaryCurrency: "$",
    location: "Russia",
    department: "IT",
    phoneNumber: "+1234567890",
    eat: function () {},
    sleep: function () {},
    callFriend: function () {},
    writeReport: function () {},
    organizeMeeting: function () {},
    retire: function () {},
    startVacation: function () {}
};

const human = new Human(john)
const employer = new Employer(john)
const employerFormer = new EmployerFormer(john)

Object.setPrototypeOf(employer, human)
Object.setPrototypeOf(employerFormer, employer)