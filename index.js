// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
      },
      {
        type: 'input', 
        message: 'Describe your project.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Enter installation instructions',
        name: 'instal',
      },
      {
        type: 'input',
        message: 'What is your usage information?',
        name: 'usage',
      },
      {
        type: 'input',  
        message: 'List any collaborators or third-party assets used on this project.',
        name: 'credits',
      },
      {
        type: 'input',  
        message: 'What are your contribution guidelines?',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'Enter your test instructions.',
        name: 'test',
      },
      {
        type: 'list',
        message: "Choose your license.",
        name: "license",
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none'], 
    }
];

const fillReadme = (res) => 
  `# ${res.title}
  ## Description
  ${res.description}
  <br>
  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Test Instructions](#test-instructions)
  - [License](#license)
  - [Badges](#badges)
  <br>
  ## Installation
  ${res.instal}
  <br>
  ## Usage
  ${res.usage} 
  ## Credits
  ${res.credits}
  <br>
  ## Contribution Guidelines
  ${res.contribution}
  <br>
  ## Test Instructions
  ${res.test}
  <br>
  ## License
  ${res.license}
  <br>
  ## Badges
  `

//console.log (questions)
// TODO: Create a function to write README file
function writeToFile(fileName, res) {
    fs.writeFile(fileName, res, (err) => {err ? console.error(err) : console.log('logged')})
}
//writeToFile("README.md", res)

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((res) => writeToFile('README.md', fillReadme(res))) 
    }

// Function call to initialize app
init();
