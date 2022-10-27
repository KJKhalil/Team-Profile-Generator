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

const createHTML = (employees) => {}