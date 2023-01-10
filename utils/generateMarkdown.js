function generateMarkdown(data) {
  let markdown = `# ${data.title}\n`;

  if (data.description) {
    markdown += `## Description\n${data.description}\n`;
  }

  if (data.installation) {
    markdown += `## Installation\n${data.installation}\n`;
  }

  if (data.usage) {
    markdown += `## Usage\n${data.usage}\n`;
  }


}

module.exports = generateMarkdown;