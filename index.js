// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markDown = require('./generateMarkdown')



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
    },
    {
      type: 'input',  
      message: 'What is your GitHub username?',
      name: 'GitHub',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
];

const fillReadme = (res) => 
`# ${res.title}

## Badge
${markDown.renderLicenseBadge(res.license)}

## Description
${res.description}

## Table of Contents 
 - [Installation](#installation)
 - [Usage](#usage)
 - [Credits](#credits)
 - [Contribution Guidelines](#contribution-guidelines)
 - [Test Instructions](#test-instructions)
 - [License](#license)
 - [Questions](#questions)

## Installation
${res.instal}

## Usage
${res.usage} 

## Credits
${res.credits}

## Contribution Guidelines
${res.contribution}

## Test Instructions
${res.test}

## License
License type: ${res.license}

${markDown.renderLicenseSection(res.license)}

Source for licensing information: ${markDown.renderLicenseLink(res.license)}

## Questions
GitHub username: ${res.GitHub}

<a href="https://github.com/${res.GitHub}">Link to GitHub profile</a>

Email me at ${res.email} if you have any additional questions.
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
    .then((res) => writeToFile('READMEcreate.md', fillReadme(res))) 
    }

    
// Function call to initialize app
init();


