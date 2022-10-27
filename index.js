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
}