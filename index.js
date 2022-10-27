const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

const Employee = {
    Manager: 'Manager',
    Engineer: 'Engineer',
    Intern: 'Intern',
};

let employees = [];

const createHTML = (employees) => {
    return `
    <!DOCTYPE html>
    <html lang="en-us">
    
        <head>
    
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" type="text/css" href="./assets/css/reset.css"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
            <title>Team Info</title>
    
            <!--Additional elements for browsers and robots go here goes here-->
    
        </head>
    
        <body>
            <div> class= 'container p-4'>
                <div class= 'row'>
                    <h1 class= 'text-center'>Team Info</h1>
                </div>
            </div>
            
            <div class= 'container'>
                <div class= 'row g-4'>
                    ${pushEmployeeInfo(employees)}
                </div>
            </div>
        </body>
    
    </html>`;
};

const pushEmployeeInfo = (employees) => {
    let employeesHTML = []
    employees.forEach((e) => {
        employeesHTML.push(employeeInfo(e));
    });

    return employeesHTML.join('');
};

const employeeInfo = (e) => {
    let roleInfoChange;
    let headerColor = '';
    switch (e.getRole()) {
        case Employee.Manager:
            roleInfoChange = `Office: ${e.officeNumber}`;
            headerColor = 'bg-primary text-light';
            break;
            
        case Employee.Engineer:
            roleInfoChange = `GitHub: ${e.getGitHub}`;
            headerColor = 'bg-primary text-light';
            break;

        case Employee.Intern:
            roleInfoChange = `School: ${e.getSchool}`;
            headerColor = 'bg-primary text-light';
            break;
    }

    return `
    <div class= "col-sm col-lg">
        <div> class= 'card'>

            <div class= 'card-header ${headerColor}'>
                <h2 class= 'card-title'>${e.getName()}</h2>
            </div>

            <div class= 'card-body'>
                <ul class= 'list-group'>
                    <li class= 'list-group-item'>
                        Role: <strong>${e.getRole()}</strong>
                    </li>
                    <li class= 'list-group-item'>
                        Id: ${e.getId()}
                    </li>
                    <li class= 'list-group-item'>
                        <a href= 'mailto: ${e.getEmail()}'>${e.getEmail()}</a>
                    </li>
                    <li class= 'list-group-item'>
                        ${roleInfoChange}
                    </li>
                </ul>
            </div>
        </div>
    </div>`
};

function writeToFile (fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
            return;
        }
        else {
            console.log('Your Team Profile Has Been Created.')
        }
    });
}

const validateAnswer = {
    required: (response) => {
        return response ? true : console.error('Answer Required');
    }
};

const questions = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What Role Is This Employee?',
            name: 'employeeRole',
            choices: [new inquirer.Separator(), Employee.Manager, Employee.Engineer, Employee.Intern],
        },
        {
            type: 'input',
            message: 'What Is The Name Of This Employee',
            name: 'employeeName',
            validate: (response) => {
                return validateAnswer.required(response);
            },
        },
        {
            type: 'input',
            message: 'What Is The Id Of This Employee',
            name: 'employeeId',
            validate: (response) => {
                return validateAnswer.required(response);
            },
        },
        {
            type: 'input',
            message: 'What Is The Email Address Of This Employee',
            name: 'employeeEmail',
            validate: (response) => {
                return validateAnswer.required(response);
            },
        },
        {
            type: 'input',
            message: 'What Is The Office Number For The Manager',
            name: 'officeNumber',
            when: (answers) => answers.employeeRole === Employee.Manager,
            validate: (response) => {
                return validateAnswer.required(response);
            },
        },
        {
            type: 'input',
            message: 'GitHub Link For The Engineer(s)',
            name: 'gitHubLink',
            when: (answers) => answers.employeeRole === Employee.Engineer,
            validate: (response) => {
                return validateAnswer.required(response);
            },
        },
        {
            type: 'input',
            message: 'What School Does The Intern Go To',
            name: 'internsSchool',
            when: (answers) => answers.employeeRole === Employee.Intern,
            validate: (response) => {
                return validateAnswer.required(response);
            },
        },
        {
            type: 'confirm',
            message: 'Do You Have Any More Employees To Add To Your Team',
            name: 'confirm'
        },
    ])
}