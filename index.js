const inquirer = require('inquirer');

const welcome = '--Create your team.\n--Enter the manager\'s information,\n--then choose to add engineers and/or interns.'

const questions = { 
    name: 'Enter employee name: ',
    id: 'Enter employeee id: ',
    email: 'Enter employee e-mail address: ',
    officeNumber: 'Enter manager\'s office number: ',
    gitHub: 'Enter engineer\'s GitHub user name: ',
    school: 'Enter intern\'s school name: ',
    exitMsg: `${new inquirer.Separator()}\n Employee profile added!\n Add another employee or exit application?`,
}
const inquiry = (role) =>[
    {
        name: 'name',
        type: 'input',
        message: questions.name,            //ask all
    },
    {
        name: 'id',
        type: 'input',
        message: questions.id,              //ask all
    },
    {
        name: 'email',
        type: 'input',
        message: questions.email,           //ask all
    },
    {
        name: 'officeNumber',
        type: 'input',
        message: questions.officeNumber,    //ask manager only
        when: role == 'Manager',
    },
    {
        name: 'gitHub',
        type: 'input',
        message: questions.gitHub,          //ask engineer only
        when: role == 'Engineer',
    },
    {
        name: 'school',
        type: 'input',
        message: questions.school,          //ask intern only
        when: role == "Intern",
    },
    {
        name: 'menu',                       //menu options
        type: 'list',
        message: questions.exitMsg,
        choices: ['Engineer','Intern','Exit'],
    },
]   
function init(role) {

    inquirer.prompt(inquiry(role))
    .then((response) =>{
        switch(role){
            case 'Manager':
                //create new manager
            case 'Engineer':
                //create new enginer
            case 'Intern':
                //create new intern
        }
        if (response.menu != 'Exit') init(response.menu);
        //
        
    })
    //.catch(() => console.log("Oops, Something went wrong!"));     //message to return on error
  }

console.log(welcome);
init('Manager');   //initialize program