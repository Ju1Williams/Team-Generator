const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require ('./lib/Manager');
const Employee = require ('./lib/Employee');
const Engineer = require ('./lib/Engineer');
const generateMarkdown = require ('./src/generateHtml')

const team = [];

const promptEmployee = () => {
  console.log('Team Build');
  return inquirer.prompt([
    {
      type: 'input',
      
    }

  ])
}
