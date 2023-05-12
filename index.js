const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const inquirer = require('inquirer');

const teamArray = [];

//Inquirer prompts to add a manager
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
                if (nameInput) {
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

//Inquirer prompts to add employees other than managers
const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please choose the employees role',
            choices: ['Engineer', 'Intern']
        },

        {
            type: 'input',
            name: 'name',
            message:'Please enter the employees name',
            validate: nameInput => {
                if(nameInput){
                    return true;
                } else {
                    console.log("Please enter a name for the employee")
                    return false;
                }
            }
        },

        {
            type:'input',
            name: 'email',
            message: 'Please enter an email address for this employee',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email address for this employee')
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'github',
            message: 'please enter the employees github username',
            // runs this prompt only when the role of engineer has been selected
            when: (input) => input.role === 'Engineer',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a github username for this employee')

                }

            }

        },

        {
            type: 'input',
            name: 'school',
            message: 'Please enter the interns school',
            //runs this prompt only if the role of intern has been selected
            when: (input) => input.role === 'Intern',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a school for this intern')
                }
            }
        },

        {
            type: 'confirm',
            name: 'employeeAddConfirm',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])

    .then(employeeData => {

        let {name, id, email, role, github, school, employeeAddConfirm } = employeeData;
        let employee;

        if(role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern ( name, id, email, school);
            console.log(employee);
        }

        teamArray.push(employee);

        if (employeeAddConfirm) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err =>{
        if (err){
            console.log(err);
            return;
        } else {
            console.log('Your team profile has been successfully created. To view it please check the index.html file.')
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML =>{
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });