function generateMarkdown({
  title,
  description,
  username,
  usage,
  table,
  installation,
  license,
  contributions,
  tests,
}) {
  // Require it in my index.html and then call it as well in one of my functions
  return `
# ${header}
# ${username}
# ${title}
# ${description}
# ${usage}
# ${table}
# ${installation}
# ${license}
# ${contributions}
# ${tests}
`;
}

module.exports = generateMarkdown; // Add the function by creating an object? Module.exports
