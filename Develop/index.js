// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const readMeTemplate = require("./utils/readMeTemplate");
// TODO: Create an array of questions for user input
const questions = [];
const promptUser = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'username',
            message:'Enter GitHub user link:'
        },
        {
            type:'input',
            name:"personName",
            message: 'Enter Name',
        },
        {
            type:'input',
            name:'projectTitle',
            message:'What is the title of your project called?'
        },
        {
            type:'input',
            name:'description',
            message:'Describe the project:'
        },
        {
            type:'input',
            name:'installation',
            message:'What are the steps required to install your project?'
        },
        {
            type:'input',
            name:'usage',
            message:'Provide instructions'
        },
        {
            type:'list',
            name:'license',
            message:'Choose the license for this project:',
            choices: ['APACHE', 'MIT', 'BSD', 'BOOST']
        },
        {
            type:'input',
            name:'email',
            message:'What is your email address?'
        },
        {
            type:'input',
            name:'contributing',
            message:'If you would like others to contribute to your app/package, add guidelines for how to do so. If not, skip or type "N/A":'
        },
    ])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
const createFile = util.promisify(fs.writeFile);
// TODO: Create a function to initialize app

async function init() {
    try {
        const data = await promptUser();
        const createReadme = readMeTemplate(data);

        await createFile('./sample/README.md', createReadme);
        console.log('Successfully created README.md');
    } catch(err) {
      console.log(err);
    }
};
// Function call to initialize app
init();
