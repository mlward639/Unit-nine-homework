// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    //console.log('fxn runnnningggg')
    if (license == 'MIT') {
      console.log('markdown MIT');
      return `<img src='https://img.shields.io/badge/License-MIT-yellow.svg'>`;
    }
    else if (license == 'APACHE 2.0') {
      console.log('markdown APACHE');
      return `<img src='https://img.shields.io/badge/License-Apache%202.0-blue.svg'>`;
    }
    else if (license == 'GPL 3.0') {
      console.log('markdown GPL');
      return `<img src='https://img.shields.io/badge/License-GPLv3-blue.svg'>`;
    }
    else if (license == 'BSD 3') {
      console.log('markdown BSD');
      return `<img src='https://img.shields.io/badge/License-BSD%203--Clause-blue.svg'`;
    }
    else if (!license) {
      console.log('nothing')
      return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log('fxn runnnningggg')
  if (license == 'MIT') {
    return `<a href="https://opensource.org/licenses/MIT">Link to MIT license</a>`;
  }
  else if (license == 'APACHE 2.0') {
    return `<a href="https://opensource.org/licenses/Apache-2.0">Link to APACHE 2.0 license</a>`;

  }
  else if (license == 'GPL 3.0') {
    return `<a href="https://www.gnu.org/licenses/gpl-3.0">Link to GPL 3.0 license</a>`;
  }
  else if (license == 'BSD 3') {
    return `<a href="https://opensource.org/licenses/BSD-3-Clause">Link to BSD 3 license</a>`;
  }
  else if (!license) {
    console.log('nothing')
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {
  renderLicenseBadge,
  renderLicenseLink
};
