const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require ('./Manager');
const Employee = require ('./Employee');
const Engineer = require ('./Engineer');
const path = require("path");



const promptEmployee = () => {
  return inquierer.prompt ([
    {
      type: "choice",
      name: ""
    }
  ])
}

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])


    fs.writeFileSync
