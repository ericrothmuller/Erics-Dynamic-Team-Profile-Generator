const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, employeeId, email, school, ) {
        super();
        this.name = name;
        this.employeeId = employeeId;
        this.email = email;
        this.school = school;
    }
}

module.exports = Employee;

module.exports = Intern;