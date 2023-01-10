const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions for your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide the usage information for your project?",
    name: "usage",
  },
  {
    type: "list",
    message: "Choose a license for your application",
    name: "license",
    choices: ["MIT", "ISC", "GPL-3.0", "Apache-2.0"],
  },
  {
    type: "input",
    message: "Provide the contribution guidelines for your project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "Provide the test instructions for your project?",
    name: "tests",
  },
  {
    type: "input",
    message: "Enter your GitHub username",
    name: "username",
  },
  {
    type: "input",
    message: "Enter your email address",
    name: "email",
    },
      {
        type: "input",
        message: "Enter the file path for your screenshot or gif (optional)",
        name: "screenshot",
        validate: function(value) {
            if(!value) return true; // if no path is provided, it's optional.
            if(!fs.existsSync(value)) return 'file not found';
            if (!/(\.jpg|\.jpeg|\.png|\.gif)$/i.test(value)) return 'file is not an image';
            return true;
        }
    }
];

async function writeToFile(fileName, data) {
  try {
    await fs.promises.writeFile(fileName, data);
    console.log(`Successfully wrote to ${fileName}`);
  } catch (error) {
    console.log(error);
  }
}

async function init() {
  if (fs.existsSync("README.md")) {
    fs.unlinkSync("README.md");
  }
  const answers = await inquirer.prompt(questions);
  const markdown = generateMarkdown(answers);
  await writeToFile("README.md", markdown);
}

init();