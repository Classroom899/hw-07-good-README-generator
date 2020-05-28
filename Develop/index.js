var fs = require("fs");
var inquirer = require("inquirer");
const axios = require("axios");

// .gitignore will ignore anything we want and it will pretend some things don't exist -- Currently node_modules is being ignored

// We can add to our questions array for what we want to ask the user

const questions = [
  {
    type: "input",
    message: "What is your user name?",
    name: "username",
  },
  {
    type: "input",
    message: "What is the title that you want to name this project/repository?",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a description for this project.",
    name: "description",
  },
  {
    type: "input",
    message: "Create a table of contents.",
    name: "table-of-contents",
  },
  {
    type: "input",
    message: "What will this project be used for?",
    name: "usage",
  },
];

// function writeToFile(fileName, data) {}

function init() {}

init();

inquirer.prompt(questions).then(function (response) {
  console.log(response);
  fs.writeFile("README.md", [response.name], function (err) {
    // Try to make the README.md all capitals
    // process.argv is what we keep track of in the command line and what we type in the terminal

    if (err) {
      return console.log(err);
    }
    console.log("README file has been created.");
  });
});
