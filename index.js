const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')


const generateHTMLmanager = ({ name, empId, email, phone}) =>
    `
            <div class="col-4 m-3 card border-info mb-3" style="max-width: 20rem;">
              <h3 class="card-header">${name}</h3>
              <h4 class="card-header">Manager</h4>
              <div class="card-body">
                <p class="card-title">ID: ${empId}</p>
                <p class="card-title">Email:</p><a href = "mailto: ${email}">${email}</a>
                <p class="card-title">Office Number: ${phone}</p>
              </div>
            </div>
    `
  const generateHTMLengineer = ({ name, empId, email, github}) =>
    `
            <div class="col-4 m-3 card border-info mb-3" style="max-width: 20rem;">
              <h3 class="card-header">${name}</h3>
              <h4 class="card-header">Engineer</h4>
              <div class="card-body">
                <p class="card-title">ID: ${empId}</p>
                <p class="card-title">Email:</p><a href = "mailto: ${email}">${email}</a>
                <p class="card-title">Github Username: </p><a href="https://github.com/${github}">${github}</a>
              </div>
            </div>
    `

  const generateHTMLintern = ({ name, empId, email, school}) =>
    `
            <div class="col-4 m-3 card border-info mb-3" style="max-width: 20rem;">
              <h3 class="card-header">${name}</h3>
              <h4 class="card-header">Intern</h4>
              <div class="card-body">
                <p class="card-title">ID: ${empId}</p>
                <p class="card-title">Email:</p><a href = "mailto: ${email}">${email}</a>
                <p class="card-title">School Name: ${school}</p>
              </div>
            </div>
    `
function addTeamMember()  {
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'addTeam',
      message: "Which team member would you like to add?",
      choices: [
        {
          name: 'add Manager',
          value: 1
        },
        {
          name: 'add Engineer',
          value: 2
        },
        {
          name: 'add Intern',
          value: 3
        },
        {
          name: 'Finish',
          value: 4
        },
        ]
      },
    ])
    .then((answer => {

      if (answer.addTeam === 1) {
        return addManager()
      } else if (answer.addTeam === 2 ) {
        return addEngineer()
      }else if (answer.addTeam === 3) {
        return addIntern()
      } else {
        console.log('Successfully created index.html!')
      }
    }))
  }
addTeamMember()

function addManager(answer) {
  inquirer
  .prompt([
    {
    type: 'input',
    name: 'name',
    message: 'Enter manager name:',
  },
  {
    type: 'input',
    name: 'empId',
    message: 'Enter manager employee ID:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter manager email:',
  },
  {
    type: 'input',
    name: 'phone',
    message: 'Enter manager office number:',
  },
  ])
  .then((answer => {
    const newManager = new Manager(answer.name, answer.empId, answer.email, answer.phone)

    const htmlPageContent = generateHTMLmanager(newManager);
  
        fs.appendFile('index.html', htmlPageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created index.html!')
        );
    addTeamMember() 
    }))
  } 


function addEngineer(answer) {
  inquirer
  .prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Enter engineer name:',
  },
  {
    type: 'input',
    name: 'empId',
    message: 'Enter engineer employee ID:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter engineer email:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter engineer GitHub username:',
  },
  ])
  .then((answer => {
    const newEngineer = new Engineer(answer.name, answer.empId, answer.email, answer.github)

    const htmlPageContent = generateHTMLengineer(newEngineer);
  
        fs.appendFile('index.html', htmlPageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created index.html!')
        );
    addTeamMember() 
    }))
  } 



function addIntern(answer) {
  inquirer
  .prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Enter intern name:',
  },
  {
    type: 'input',
    name: 'empId',
    message: 'Enter intern employee ID:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter intern email:',
  },
  {
    type: 'input',
    name: 'school',
    message: 'Enter intern school name:',
  }
    ])
  .then((answer => {
    const newIntern = new Intern (answer.name, answer.empId, answer.email, answer.school)

    const htmlPageContent = generateHTMLintern(newIntern);
  
        fs.appendFile('index.html', htmlPageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created index.html!')
        );
    addTeamMember() 
    }))
  }

module.exports = addManager
module.exports = addEngineer
module.exports = addIntern
module.exports = generateHTMLmanager
module.exports = generateHTMLengineer
module.exports = generateHTMLintern

  
