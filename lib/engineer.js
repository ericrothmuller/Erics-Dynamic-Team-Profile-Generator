const Employee = require("./employee");

class Engineer extends Employee {
    constructor(email, username, name, employeeId, officeNumber) {
        super();
        this.email = email;
        this.username = username;
        this.name = name;
        this.employeeId = employeeId;
        this.officeNumber = officeNumber;
    }
}

module.exports = Employee;

module.exports = Engineer;