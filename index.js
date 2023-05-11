const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

const teamArray = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else {
                    console.log('Please enter the managers name.');
                    return false;
                }
            }

        },
       
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's employee id",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter the manager's employee id.")
                    return false;
                } else {
                    return true;
                }
            }

        },

        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email address.",
            validate: nameInput => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log("Please enter a valid email address.")
                    return false;
                }

            }
        },

        {
            type: 'input',
            name: 'Office Number',
            message: "Please enter the manager's office number.",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter the manager's office number.")
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])

    .then(managerInput => {
        const { name, id, email, officeNum} = managerInput;
        const manager = new Manager (name, id, email, officeNum);

        teamArray.push(manager);
        console.log(manager);
    })
};