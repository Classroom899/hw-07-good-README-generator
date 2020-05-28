var fs = require("fs");
var inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    message: "What is your user name?",
    name: "username",
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
  });
});
