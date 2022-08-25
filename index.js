const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require ('./lib/engineer');
const Intern = require ('./lib/intern')
const generateMarkdown = require ('./src/generateHtml')

const team = [];

const promptEngineer = () => {
  console.log('Team Build');
  return inquirer.prompt([
    {
      type: 'input',
      message: 'What is your managers name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your managers id',
      name:'id',
    },
    {
      type: 'input',
      message: 'What is your managers email',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is thier github',
      name: 'github'
    },

  ]).then(engineerResponse => {

    const engineer = new Engineer(engineerResponse.name, engineerResponse.id, engineerResponse.email, engineerResponse.github);
    team.push(engineer)

    const pageContent = generateMarkdown(engineerResponse);
    fs.writeFile('./dist/index.html', pageContent, (err)=> {
      if (err===true) {
        console.log('err')
      }
    })

  })
}
promptEngineer();
