const fs = require("fs");
const inquirer = require("inquirer"); // All requires should be at the top of the page
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");

// .gitignore will ignore anything we want and it will pretend some things don't exist -- Currently node_modules is being ignored

// We can add to our questions array for what we want to ask the user

const questions = [
  {
    type: "input",
    message: "What is the header going to be for this project?",
    name: "header",
  },
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
    name: "table",
  },
  {
    type: "input",
    message: "What will this project be used for?",
    name: "usage",
  },
  {
    type: "input",
    message: "What installations will be needed?",
    name: "installation",
  },
  {
    type: "input",
    message: "What licenses is required?",
    name: "license",
  },
  {
    type: "input",
    message: "Any other contributions for this project that will be added?",
    name: "contributions",
  },
  {
    type: "input",
    message: "Any tests?",
    name: "tests",
  },
];

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
} // path.join

// Inquirer is asynchronous information

function init() {}

init();

inquirer.prompt(questions).then((response) => {
  console.log({ ...response });
  writeToFile("README.md", generateMarkdown({ ...response }));
});
// let { username, title, description, usage } = response;
// let filename = response.toLowerCase().split(" ").join("") + ".json"; // Name property decides what that key is going to be in that object of data // Our file is also going to end with .json
// axios
//   .get(`https://api.github.com/users/${response.username}`)
//   .then(({ data }) => {
//     writeToFile(
//       "README.md",
//       generateMarkdown({ ...response, ...data })
//api.github.com/users/%7Byourusername%7D
// Try to make the README.md all capitals
// process.argv is what we keep track of in the command line and what we type in the terminal
//       );
//     })
//     .catch(function (err) {
//       console.log(err); // I thought the .catch is the err?
//     });
// });

// .then(function({ username }) {
//   const queryURL = `https://api.giphy.com/v1/gifs/trending?api_key=EmNyH3yRXycry1y7373q9Rw9xYcvwJF7&limit=25&rating=G`;
// return axios.get(queryUrl);
//   axios.get(queryUrl).then((response) =>  // Hit APIs with our backend

// }

// Badge
// ![AppVeyor](https://img.shields.io/appveyor/build/Classroom899/hw-07-good-README-generator)

// [![Generic badge](https://img.shields.io/badge/

// Change licenses so that they are set to a default one

// Answers should pop in as shield, description for markdown

// Installation is set to npm i by default
