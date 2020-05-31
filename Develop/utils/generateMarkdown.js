function generateMarkdown({ title, description }) {
  // Require it in my index.html and then call it as well in one of my functions
  return `
# ${title}
# ${description}


`;
}

function littleChallenge() {
  console.log("Hello World");
}

module.exports = generateMarkdown; // Add the function by creating an object? Module.exports
