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
        message: 'What are your contribution guidelines?',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'Enter your test instructions.',
        name: 'confirm',
      },
      {
        type: 'list',
        message: "Choose your license.",
        name: "license",
        choices: ['A', 'B', 'C'], //complete
    }
];

//console.log (questions)
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, JSON.stringify(data, null, '\t'), (err) => {err ? console.error(err) : console.log('logged')})
}
writeToFile("README.md", res)

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(writeToFile("README.md", data))
}

// Function call to initialize app
//init();
