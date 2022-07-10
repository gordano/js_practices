const Human = function () {
    this.name = "John"
    this.lastName = "Smith"
    this.location = "Russia"
    this.eat = function () {}
    this.sleep = function () {}
    this.callFriend = function () {}
}

const EmployeeBase = function () {
    this.position = "Senior engineer"
    this.startDate = "10.10.1990"
    this.baseSalary = "10000"
    this.salaryCurrency = "$"
    this.department = "IT"
    this.phoneNumber = "+1234567890"
    this.endDate = "10.10.2000"
}

const Employee = function() {
    this.writeReport = function () {}
    this.organizeMeeting = function () {}
    this.startVacation = function () {}
    this.retire = function () {}
}

EmployeeBase.prototype = new Human
Employee.prototype = new EmployeeBase

const john = new Employee()

