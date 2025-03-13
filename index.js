// TODO: Include packages needed for this application
const inquirerPkg = require("inquirer").default;
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project",
  },
  {
    type: "input",
    name: "installation",
    message: "Outline the installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Instructions for use:",
  },
  {
    type: "input",
    name: "contribution",
    message: "Contribution guidelines:",
  },
  {
    type: "input",
    name: "test",
    message: "Test instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license from the following",
    choices: ["MIT", "None"],
  },
  {
    type: "input",
    name: "github ",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("README.md file successful");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirerPkg
    .prompt(questions)
    .then((answers) => {
      const content = generateMarkdown(answers);
      writeToFile("README.md", content);
    })
    .catch((err) => {
      console.error("Error", err);
    });
}

// Function call to initialize app
init();
