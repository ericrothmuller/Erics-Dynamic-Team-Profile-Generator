const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const path = require("path");
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
        
        var managerHTML = `<h1><center>Name: ${response.managerName}</center></h1><br /> <br /> <ul><li>ID: ${response.managerId}</li><li>Email: ${response.managerEmail}</li><li>Office Number: ${response.managerOfficeNumber}</li>`;

        fs.writeFile("./dist/TempManager.html", managerHTML, err => {
            if (err) {
                console.error(err);
            }
        })
            
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