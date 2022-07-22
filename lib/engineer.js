const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, employeeId, email, username) {
        super();
        this.name = name;
        this.employeeId = employeeId;
        this.email = email;
        this.username = username;
    }
}

module.exports = Employee;

module.exports = Engineer;