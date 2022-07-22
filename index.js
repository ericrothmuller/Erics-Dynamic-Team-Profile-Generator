const employee = require("./lib/employee");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the name of the team manager?",
            name: "managerName",
        },
        {
            type: "input",
            message: "What is the employee ID of the team manager?",
            name: "managerId",
        },
        {
            type: "input",
            message: "What is the email address of the team manager?",
            name: "managerEmail",
        },
        {
            type: "input",
            message: "What is the office number of the team manager?",
            name: "managerOfficeNumber",
        },
        {
            type: "checkbox",
            message: "What type of other team member would you like to add?",
            choices: ["Engineer", "Intern", "None / Done"],
            name: "engineerOrIntern",
        },
    ])
    .then((response) => {
        console.log(response);
        // response.managerName
        // response.managerId
        // response.managerEmail
        // response.managerOfficeNumber
        // response.engineerOrIntern

        if (response.engineerOrIntern == "Engineer") {
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What is the name of the Engineer?",
                        name: "engineerName",
                    },
                    {
                        type: "input",
                        message: "What is the employee ID of the Engineer?",
                        name: "engineerId",
                    },
                    {
                        type: "input",
                        message: "What is the email of the Engineer?",
                        name: "engineerEmail",
                    },
                    {
                        type: "input",
                        message: "What is the GitHub username of the Engineer?",
                        name: "engineerUsername",
                    },
                    {
                        type: "checkbox",
                        message: "What type of other team member would you like to add?",
                        choices: ["Engineer", "Intern", "None / Done"],
                        name: "engineerOrIntern",
                    },
                ])
        }

        if (response.engineerOrIntern == "Intern") {
            inquirer
                .prompt([
                    {
                        type: "input",
                        message: "What is the name of the Intern?",
                        name: "internName",
                    },
                    {
                        type: "input",
                        message: "What is the employee ID of the Intern?",
                        name: "internId",
                    },
                    {
                        type: "input",
                        message: "What is the email of the Intern?",
                        name: "internEmail",
                    },
                    {
                        type: "input",
                        message: "What school did the Intern attend?",
                        name: "internSchool",
                    },
                    {
                        type: "checkbox",
                        message: "What type of other team member would you like to add?",
                        choices: ["Engineer", "Intern", "None / Done"],
                        name: "engineerOrIntern",
                    },
                ])
        }

        if (response.engineerOrIntern == "None / Done") {
            console.log("done");
            return
        }


    }).then((data) => {

        console.log(data);
    });