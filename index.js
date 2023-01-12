const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require('path');

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
    type: "confirm",
    message: "Include a screenshot in the README?",
    name: "includeScreenshot",
    default: false
  },
  {
    type: "input",
    message: "Enter the file path for your screenshot (optional)",
    name: "screenshot",
    when: function(answers) {
      return answers.includeScreenshot;
    },
    validate: function(value) {
      if(!value) return true;
      if(!fs.existsSync(value)) return 'file not found';
      if (!/(\.jpg|\.jpeg|\.png|\.gif)$/i.test(value)) return 'file is not an image';
      return true;
    }
  },
  {
    type: "confirm",
    message: "Include a walkthrough video link in the README?",
    name: "includeVideo",
    default: false
  },
  {
    type: "input",
    message: "Enter the link to your walkthrough video (optional)",
     name: "video",
    when: function(answers) {
      return answers.includeVideo;
    },
    validate: function(value) {
      if(!value) return true;
      if(!value.startsWith("http")) return "Please enter a valid URL";
      return true;
    }
  }
];

async function writeToFile(fileName, data, answers) {
  try {
    await fs.promises.writeFile(fileName, data);
    console.log(`Successfully wrote to ${fileName}`);
    // copy the image file to the same directory
    const screenshot = answers.screenshot;
    if (screenshot) {
      const fileName = screenshot.split("/").pop();
      const imagePath = path.join(process.cwd(),'', fileName); 
      if(fs.existsSync(screenshot) && (/(\.jpg|\.jpeg|\.png|\.gif)$/i.test(screenshot))){
          await fs.promises.copyFile(screenshot, imagePath);
          console.log(`Successfully copied ${screenshot} to ${imagePath}`);
      }else{
          console.log(`file not found or not an image`);
}
}
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
await writeToFile("README.md", markdown, answers);
}

init();