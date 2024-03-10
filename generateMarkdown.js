//Creates a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "none"){
      return `![Github License](https://img.shields.io/badge/Github%20License-${license}-green.svg)` 
  }
  return '';
}

//Creates a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `* [License](#license)`;
  }
  return '';
}

// Creates a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'none'){
    return `## License
       Licensed under ${license} license`
  }
  return '';
}

//Creates a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [Test](#tests)
  - [License](#license)
  - [Contact-Me](#email)
  
  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## License
  ${data.license}

  ## Contact-Me
  if you have any question about the project or any issue please contact me [${data.email}](mailto:${data.email}@gmail.com). Here is my Github at [${data.github}](https://github.com/${data.github}/).

  `;
}

module.exports = generateMarkdown;