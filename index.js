// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const readMeTemplate = require("./utils/readMeTemplate");
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'username',
            message:'Enter your GitHub user link:',
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log('Please enter your GitHub user link:');
                  return false;
                }
              }
        },
        {
            type:'input',
            name:"personName",
            message: 'Please enter your name',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter your name');
                  return false;
                }
              }
        },
        {
            type:'input',
            name:'projectTitle',
            message:'What is the title of your project called?',
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Please the title of your project');
                  return false;
                }
            },
        },
        {
            type:'input',
            name:'description',
            message:'Describe the project:',
            validate: describeInput => {
                if (describeInput) {
                  return true;
                } else {
                  console.log('Please enter project description');
                  return false;
                }
            },
        },
        {
            type:'input',
            name:'installation',
            message:'What are the steps required to install your project?',
            validate: installInput => {
                if (installInput) {
                  return true;
                } else {
                  console.log('Please enter steps to install project');
                  return false;
                }
            },
        },
        {
            type:'input',
            name:'usage',
            message:'What is the usage of this project',
            validate: usageInput => {
                if (usageInput) {
                  return true;
                } else {
                  console.log('Please provide the use of this project');
                  return false;
                }
            },
        },
        {
            type:'list',
            name:'license',
            message:'Choose the license for this project:',
            choices: ['BSD', 'MIT', 'GPL']
        },
        {
            type:'input',
            name:'email',
            message:'What is your email address?',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter your email address');
                  return false;
                }
            },

        },
        {
            type:'input',
            name:'contributing',
            message:'Enter in ways to contribute to the project if not, then skip":'
        },
        {
            type:'input',
            name:'tests',
            message:'What tests have you done for this project',
            validate: testInput => {
                if (testInput) {
                  return true;
                } else {
                  console.log('Please enter tests run on this project');
                  return false;
                }
            },

        },
    ])
};



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
const createFile = util.promisify(fs.writeFile);
// TODO: Create a function to initialize app

async function creation() {
    try {
        const data = await promptUser();
        const createReadme = readMeTemplate(data);
        await createFile('./sample/README.md', createReadme);
        console.log('Successfully created README.md');
    } catch(err) {
      console.log(err);
    }
};

creation();

