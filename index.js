/* CRITERIA
- Clicking an email address opens default email program and populates the TO field with team members email
- Clicking on a GitHub username opens the profile in a new tab
- Inquirer flow
    - Enter team manager's name, employee ID, email, and office number
    - Open menu
    - Menu wih the following options:
        - Add an engineer or intern
        - Finish building team
    - On engineer select:
        - Enter engineer's name, ID, email, and Github Username
        - Open menu
    - On intern select:
        - Enter intern's name, ID, email, and school
        - Open menu
    - On finish building:
    - Exit application and generate HTML
- Engineer, Intern, and Manager classes extend Employee class
- All tests must pass
- Submission: include repo, sample generated HTML, and walkthrough video */

const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const generateHtml = require('./src/template.js');

function App() {
    inquirer
    .prompt({
        type: 'text',
        name: 'mgrName',
        message: 'What is your name?'
    },
    {
        type: 'text',
        name: 'mgrId',
        message: 'What is your employee ID?'
    },
    {
        type: 'text',
        name: 'mgrEmail',
        message: 'What is your email?'
    },
    {
        type: 'text',
        name: 'mgrOfficeNum',
        message: 'What is your office number?'
    },
    {
        type: 'list',
        name: 'menuList1',
        message: 'Please select an option from the list below to proceed.',
        choices: ['Add an engineer or intern', 'Finish building team'],
        when: ({ mgrOfficeNum }, { egrGitHub }, { intSchool }, { finishConfirm }) => {
            if (mgrOfficeNum || egrGitHub || intSchool || finishConfirm === false) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'empTypeSelect',
        message: 'What type of employee would you like to add?',
        choices: ['Engineer', 'Intern'],
        when: ({ menuList1 }) => {
            if (menuList1 === 'Add an engineer or intern') {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'egrName',
        message: "What is the engineer's name?",
        when: ({ empTypeSelect }) => {
            if (empTypeSelect === 'Engineer') {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'egrId',
        message: "What is the engineer's employee ID?",
        when: ({ egrName }) => {
            if (egrName) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'egrEmail',
        message: "What is the engineer's email?",
        when: ({ egrId }) => {
            if (egrId) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'egrGitHub',
        message: "What is the engineer's GitHub username?",
        when: ({ egrEmail }) => {
            if (egrEmail) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'intName',
        message: "What is the intern's name?",
        when: ({ empTypeSelect }) => {
            if (empTypeSelect === 'Intern') {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'intId',
        message: "What is the intern's employee ID?",
        when: ({ intName }) => {
            if (intName) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'intEmail',
        message: "What is the intern's email?",
        when: ({ intId }) => {
            if (intId) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'intSchool',
        message: "What is the intern's school?",
        when: ({ intEmail }) => {
            if (intEmail) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'finishConfirm',
        message: 'Are you done building your team?',
        default: true,
        when: ({ menuList1 }) => {
            if (menuList1 === 'Finish building team') {
                return true;
            } else {
                return false;
            }
        }
    });
};

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('dist/teamSite.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'HTML created! Open dist/teamSite.html to view your custom team page.'
            });
        });
    });
};

// initialize app
App()
.then((answers) => {
    return generateHtml(answers);
})
.then(generateHtml => {
    return writeFile(generateHtml);
});

module.exports = App;
