function generateMarkdown(data) {
  // Require it in my index.html and then call it as well in one of my functions
  return `
# ${data.title}

`;
}

module.exports = generateMarkdown;
