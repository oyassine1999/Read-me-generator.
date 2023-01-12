function generateMarkdown(data) {
  let markdown = `# ${data.title}\n`;

  markdown += `## Table of Contents\n`
  markdown += `- [Introduction](#introduction)\n`
  markdown += `- [Installation](#installation)\n`
  markdown += `- [Usage](#usage)\n`
  markdown += `- [License](#license)\n`
  markdown += `- [Contribution](#contribution)\n`
  markdown += `- [Tests](#tests)\n`
  markdown += `- [Contact Information](#contact-information)\n`
  if (data.includeScreenshot) {
    markdown += `- [Screenshot](#screenshot)\n`;
  }
  if (data.includeVideo) {
    markdown += `- [Walkthrough Video](#walkthrough-video)\n`;
  }
  markdown += `\n`;

  if (data.description) {
    markdown += `## Introduction\n${data.description}\n`;
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

  markdown += `## Contact Information\n- **GitHub username:** [${data.username}](https://github.com/${data.username})\n- **Email:** ${data.email}\n`;

  if (data.includeScreenshot) {
    markdown += `## Screenshot\n![Screenshot](${data.screenshot})\n`;
  }
  if (data.includeVideo) {
    markdown += `## Walkthrough Video\n`;
    markdown += `[${data.video}](${data.video})\n`;
  }
  return markdown;
}

module.exports = generateMarkdown;
