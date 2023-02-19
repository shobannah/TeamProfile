const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ managerName, name, title, empId, email, phone, addTeam, github, school}) =>
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
    <title>My Team</title>
  </head>
  <body>
    <header class=" fs-1 text-lg-center text-bg-secondary ">My Team</header>
    <main class="m-lg-4">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" id="employee">
          <div class="card border-info mb-3" style="max-width: 18rem;">
            <h3 class="card-header">${managerName}</h3>
            <h3 class="card-header">${name}</h3>
            <h4 class="card-header">${title}</h4>
            <div class="card-body">
              <p class="card-title">ID:${empId}</p>
              <p class="card-title">Email: ${email}</p>
              <p class="card-title">Office Number: '${phone}</p>
              <p class="card-title">Office Number: '${github}</p>
              <p class="card-title">Office Number: '${school}</p>
              ${addTeam}
            </div>
          </div>    
        </div>
      </div>
    </main>
  </body>
  </html>`;

function addTeamMember()  {
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'addTeam',
      message: "Which team member would you like to add?",
      choices: ['add Manager','add Engineer', 'add Intern', 'Finish']
      },
    ])
    .then((addTeam => {

      if (addTeam == 'add Manager' ) {
        return addManager()
      } else if (addTeam == 'add Engineer' ) {
        return addEngineer()
      }else if (addTeam == 'add Intern' ) {
        return addIntern()
      } else {
        const htmlPageContent = generateHTML(addTeam);

        fs.writeFile('index.html', htmlPageContent, (err) =>
          err ? console.log(err) : console.log('Successfully created index.html!')
        );
      }
    }))
  }
addTeamMember()

function addManager() {
  inquirer
  .prompt([
    {
    type: 'input',
    name: 'name',
    message: 'Enter employee name:',
  },
  {
    type: 'input',
    name: 'title',
    message: 'Enter employee title:',
  },
  {
    type: 'input',
    name: 'empId',
    message: 'Enter employee emplyee ID:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter employee email:',
  },
  {
    type: 'input',
    name: 'phone',
    message: 'Enter employee office number:',
  },
  ])
  .then({addTeamMember})
  }
  

function addEngineer() {
  inquirer
  .prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Enter employee name:',
  },
  {
    type: 'input',
    name: 'title',
    message: 'Enter employee title:',
  },
  {
    type: 'input',
    name: 'empId',
    message: 'Enter employee emplyee ID:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter employee email:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter employee GitHub username:',
  },
    ])
    .then({addTeamMember}) 
}



function addIntern() {
  inquirer
  .prompt([
  {
    type: 'input',
    name: 'name',
    message: 'Enter employee name:',
  },
  {
    type: 'input',
    name: 'title',
    message: 'Enter employee title:',
  },
  {
    type: 'input',
    name: 'empId',
    message: 'Enter employee emplyee ID:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter employee email:',
  },
  {
    type: 'input',
    name: 'school',
    message: 'Enter employee school name:',
  }
    ])
    .then({addTeamMember})
}



  
