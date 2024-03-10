//Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
const { error } = require("console");

//Creates an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the title of you project?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Provide a short description about your project."
    },
 
    {
        type: 'input',
        name: 'installation',
        message: "Provide directions on how to install and use your project.",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Provide usage information",
    },
    {
        type: 'input',
        name: 'contributors',
        message: "List who contributed to this project?"
    },
    {
        type: 'input',
        name: 'features',
        message: "List all features in your project"
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose license for your project',
        choices:['MIT License', 'Apache License 2.0', 'The Unlicense', 'Mozilla Public License']
    },
    {
        type: 'input',
        name: 'tests',
        message: "Provide test instructions."
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter your github username"
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter your E-Mail address for contact purposes."
    }
];



// Creates a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err) {
            console.log( 'Error in writing README',err);
        } else {
         console.log ('successfully created README file.');
        }
    });
}

//Creates a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const markdownContent = generateMarkdown(answers);
            writeToFile('README.md', markdownContent); 
        });
}

// Function call to initialize app
init();
