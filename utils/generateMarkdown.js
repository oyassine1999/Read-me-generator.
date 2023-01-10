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

  if (data.license) {
    markdown += `## License\n`;
    markdown += `[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})\n`;
    markdown += `This project is licensed under the [${data.license}](https://opensource.org/licenses/${data.license}) license.\n`;
  }

  if (data.contributing) {
    markdown += `## Contributing\n${data.contributing}\n`;
  }

  if (data.tests) {
    markdown += `## Tests\n${data.tests}\n`;
  }

  markdown += `## Contact Information\n- **GitHub username:** ${data.username}\n- **Email:** ${data.email}\n`;

  if (data.screenshot) {
        markdown += `## Screenshot\n![Screenshot](${data.screenshot})\n`;
    }

  return markdown;
}

module.exports = generateMarkdown;