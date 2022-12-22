const Manager = require("./lib/manager");        //import classes
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const createPage = require("./src/createPage")

const inquirer = require('inquirer');            //import libraries   
const fs = require('fs'); 

let manager;                                     //declare variables                   
let engineers = [];
let interns = [];
                                                 //welcome message
const welcome = '--Create your team.\n--Enter the manager\'s information,\n--then choose to add engineers and/or interns.'

const questions = {     //questions for user input
    name: 'Enter employee name: ',
    id: 'Enter employeee id: ',
    email: 'Enter employee e-mail address: ',
    officeNumber: 'Enter manager\'s office number: ',
    gitHub: 'Enter engineer\'s GitHub user name: ',
    school: 'Enter intern\'s school name: ',
    exitMsg: `${new inquirer.Separator()}\n Employee profile added!\n Add another employee or exit application?`,
}
const inquiry = (role) =>[  //inquiry
    {
        name: 'name',
        type: 'input',
        message: questions.name,                                               //ask all
        validate:(val)=> (val? true : "Required field"),                       //required field
    },
    {
        name: 'id',
        type: 'input',
        message: questions.id,                                                 //ask all
        validate:(val)=> (!isNaN(val)? true : " Invalid ID, try again"),       //id must be number 
    },
    {
        name: 'email',
        type: 'input',
        message: questions.email,                                              //ask all
        validate:(val)=> {                                                     //validate email address         
            let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;      
            let returnVal = res.test(val);
            if (returnVal) return true;
            else console.log("  Invalid e-mail address, try again");
          },
    },
    {
        name: 'officeNumber',
        type: 'input',
        message: questions.officeNumber,                                       //ask manager only
        when: role == 'Manager',
        validate:(val)=> {                                                     //validate phone number 
            let res = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
            let returnVal = res.test(val);
            if (returnVal) return true;  
            else console.log("  Invalid phone number, try again");
              }
    },
    {
        name: 'gitHub',
        type: 'input',
        message: questions.gitHub,                                             //ask engineer only
        when: role == 'Engineer',
        validate:(val)=> (val? true : "Required field"),                       //required field 
    },
    {
        name: 'school',
        type: 'input',
        message: questions.school,                                             //ask intern only
        when: role == "Intern",
        validate:(val)=> (val? true : "Required field"),                       //required field 
    },
    {
        name: 'menu',                                                          //menu options
        type: 'list',
        message: questions.exitMsg,
        choices: ['Engineer','Intern','Exit'],                                  
    },
]
const createEmployee = (role,{name,id,email,officeNumber,gitHub,school}) => {  //create objects
    switch (role){
        case 'Manager':{
            manager = new Manager(name,id,email,officeNumber);                 //create manager object 
            break;
        }
        case 'Engineer':{
            let employee = new Engineer(name,id,email,gitHub);                 //create engineer object 
            engineers.push(employee);                                          //add to engineer array 
            break;
        }
        case 'Intern':{
            let employee = new Intern(name,id,email,school);                   //create intern object
            interns.push(employee);                                            //add to intern array 
            break;
        }
    }    
}
function init(role) {   //run application
    inquirer.prompt(inquiry(role))                                   //ask questions for user input
    .then((response) =>{
        createEmployee(role,response);                               //call function to create objects
      
        if (response.menu != 'Exit') init(response.menu);            //recall function to add more employees
        if (response.menu == 'Exit') {
            let fileout =  createPage(manager,engineers,interns);    //call function to generate html then write to file
            fs.writeFile('./dist/index.html', fileout, (err) => err ? console.error(err) : console.log('\n*\n***HTML created successfully***'));
        }
             
    })
    .catch(() => console.log("Oops, Something went wrong!"));     //message to return on error
}
console.log(welcome); //log welcome message
init('Manager');      //initialize program
