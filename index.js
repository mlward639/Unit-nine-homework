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
<br>
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
 - [Questions](#questions)
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
badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
## Questions
GitHub username: ${res.GitHub}
<br>
<a href="https://github.com/${res.GitHub}">Link to GitHub profile</a>
<br>
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


