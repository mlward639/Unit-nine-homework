const indexRes = require('./index.js')


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    console.log('fxn runnnningggg')
    let badge = ''
    if (license == 'MIT') {
      return `<img src='https://img.shields.io/badge/License-MIT-yellow.svg'>`;
      console.log('markdown MIT');
    }
    else if (license == 'APACHE 2.0') {
      return `<img src='https://img.shields.io/badge/License-Apache%202.0-blue.svg'>`;
      console.log('markdown APACHE');

    }
    else if (license == 'GPL 3.0') {
      return `<img src='https://img.shields.io/badge/License-GPLv3-blue.svg'>`;
      console.log('markdown GPL');
    }
    else if (license == 'BSD 3') {
      return `<img src='https://img.shields.io/badge/License-BSD%203--Clause-blue.svg'`;
      console.log('markdown BSD');
    }
    else if (!license) {
      console.log('nothing')
      return '';
    }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {renderLicenseBadge};
