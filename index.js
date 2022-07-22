const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");


// Initial Prompt, starting with Manager Prompt

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
    ])
    .then((response) => {
        console.log(response);

        var managerHTML = `<h1><center>Name: ${response.managerName}</center></h1><br /> <br /> <ul><li>ID: ${response.managerId}</li><li>Email:<a href="mailto:${response.managerEmail}>${response.managerEmail}</a></li><li>Office Number: ${response.managerOfficeNumber}</li>`;

        fs.writeFile("./dist/TempManager.html", managerHTML, err => {
            if (err) {
                console.error(err);
            }
        })
        entineerOrInternFunction();
    });

// Add Engineer Prompt
var addEngineer = function addEngineer(){
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
                ])
                .then((engineerResponse) => {
                    console.log(engineerResponse);

                    var engineerHTML = `<h1><center>Name: ${engineerResponse.engineerName}</center></h1><br /> <br /> <ul><li>ID: ${engineerResponse.engineerId}</li><li>Email:<a href="mailto:${engineerResponse.engineerEmail}>${engineerResponse.engineerEmail}</a></li><li>GitHub Username: <a href="https://github.com/${engineerResponse.engineerUsername}/>${engineerResponse.engineerUsername}</a></li>`;

                    fs.writeFile("./dist/TempEngineer.html", engineerHTML, err => {
                        if (err) {
                            console.error(err);
                        }
                    })

                    entineerOrInternFunction();
                })
    };

// Add Intern prompt

var addIntern = function addIntern(){
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
                ])
                .then((internResponse) => {
                    console.log(internResponse);

                    var internHTML = `<h1><center>Name: ${internResponse.internName}</center></h1><br /> <br /> <ul><li>ID: ${internResponse.internId}</li><li>Email: <a href="mailto:${internResponse.internEmail}>${internResponse.internEmail}</a></li><li>School: ${internResponse.internSchool}</li>`;

                    fs.writeFile("./dist/TempIntern.html", internHTML, err => {
                        if (err) {
                            console.error(err);
                        }
                    })

                    entineerOrInternFunction();
                })
            };


var entineerOrInternFunction = function engineerOrInternFunction() {
    inquirer
    .prompt([
        {
            type: "checkbox",
            message: "What type of other team member would you like to add?",
            choices: ["Engineer", "Intern", "None / Done"],
            name: "engineerOrIntern",
        }
    ])
    .then((checkboxResponse) => {
        console.log(checkboxResponse);
        if (checkboxResponse.engineerOrIntern == "Engineer") {
            console.log("this was ran - Engineer");
            addEngineer();
        };

        if (checkboxResponse.engineerOrIntern == "Intern") {
            console.log("this was ran - Intern");
            addIntern();
        };

        if (checkboxResponse.engineerOrIntern =="None / Done") {
            
            managerDiv.innerHTML = managerHTML;
            engineerDiv.innerHTML = engineerHTML;
            internDiv.innerHTML = internHTML;

            return
        }
})
}