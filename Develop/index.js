const fs = require("fs");
const inquirer = require("inquirer"); // All requires should be at the top of the page
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

// Inquirer is asynchronous information

function init() {}

init();

inquirer.prompt(questions).then(function (response) {
  console.log(response);
  let { username, title, description, usage } = response;
  let filename = response.toLowerCase().split(" ").join("") + ".json"; // Name property decides what that key is going to be in that object of data // Our file is also going to end with .json
  fs.writeFile("README.md", [response.name], function (err) {
    // Try to make the README.md all capitals
    // process.argv is what we keep track of in the command line and what we type in the terminal

    if (err) {
      return console.log(err); // I thought the .catch is the err?
    }
    console.log("README file has been created.");
  });
});

// .then(function({ username }) {
//   const queryURL = `https://api.giphy.com/v1/gifs/trending?api_key=EmNyH3yRXycry1y7373q9Rw9xYcvwJF7&limit=25&rating=G`;
// return axios.get(queryUrl);
//   axios.get(queryUrl).then((response) =>  // Hit APIs with our backend

// }
