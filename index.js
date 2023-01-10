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
  